import Image from "next/image";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Rating from "../../../../../components/Rating";
import { getSession } from "@auth0/nextjs-auth0";
import Comment from "../../../../../components/Comment";
import {
  getDetailedProduct,
  getProducts,
  getRatings,
  getReviews,
  getUsers,
} from "../../../../api";
import SocialShare from "../../../../../components/SocialShare";

export async function generateMetadata({ params }: { params: params }) {
  const products = await getProducts();
  const product = products.find(
    (product: ProductElement) => product.id == params.id
  );

  return {
    title: `${product?.title}`,
    description: `${product?.description}`,
  };
}

const ProductDetails: React.FC<ParamsObj> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations("Index");
  const productId = params.id;
  const productData: ProductElement = await getDetailedProduct(productId);
  const session = await getSession();
  const userSub = session?.user?.sub;
  const userName = session?.user?.name;
  const ratings = await getRatings(productData?.id);

  const totalRating =
    ratings !== undefined
      ? ratings.reduce(
          (sum: number, item: { rating: number }) => sum + item.rating,
          0
        )
      : 0;
  const quantityOfRates = ratings !== undefined ? ratings.length : 0;
  const averageRating =
    totalRating / (quantityOfRates !== 0 ? quantityOfRates : 1);

  const userRatingObject =
    ratings !== undefined
      ? ratings.find((item: { userId: string }) => item.userId === userSub)
      : 0;

  function getNameBySub(sub: string, allUsers: User[], userName: string) {
    const user = allUsers.find((item) => item.sub === sub);
    return user ? user.name : userName;
  }

  const allUsers = await getUsers();
  const reviews = await getReviews(productData?.id);
  return (
    <section>
      <div className="w-full flex flex-col lg:flex-row items-start gap-7 lg:gap-10 justify-between py-5 px-5 max-w-[1100px] mx-auto my-10 lg:py-10 lg:px-0">
        <div className="w-full lg:w-2/3 flex flex-col gap-5 lg:gap-7">
          <div className="w-full rounded-2xl overflow-hidden">
            <Image
              src={productData?.image}
              alt={productData?.title}
              width={400}
              height={400}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-3 justify-center *:text-black *:dark:text-white *:text-[12px] lg:*:text-[16px] [&_span]:font-bold [&_span]:text-[15px] [&_span]:lg:text-[18px] [&_span]:text-blue-500">
          <h1 className="!text-[25px] leading-[25px] !lg:text-[40px] lg:leading-[45px] text-start text-black dark:text-white">
            {productData?.title}
          </h1>
          <div className="flex gap-1 items-center">
            <span>{t("rating")}: </span>
            {`${averageRating.toFixed(2)} ${t("outOf5")}`}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3b82f6"
              stroke="#3b82f6"
              className="w-5"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-black dark:text-white !text-[14px] !lg:text-[16px]">
              ( {quantityOfRates} )
            </span>
          </div>
          {userSub && (
            <div className="flex gap-2">
              <span>
                {userRatingObject?.rating
                  ? t("yourRate") + ":"
                  : t("rateUs") + ":"}
              </span>
              <Rating
                productId={productData?.id}
                userId={userSub}
                tempRatingProps={userRatingObject?.rating}
              />
            </div>
          )}
          <div>
            <span>{t("category")}: </span>
            {t(productData?.category)}
          </div>
          <div>
            <span>{t("brand")}: </span>
            {productData?.brand}
          </div>
          <div>
            <span>{t("price")}: </span>
            {productData?.price} $
          </div>
          <div className="flex gap-2 items-center">
            <span>{t("stoke")}: </span>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            {t(productData?.stock)}
          </div>
          <div>
            <span>{t("description")}: </span>
            <p>{productData?.description}</p>
          </div>
          <SocialShare
            path={"/products/"}
            id={productData?.id}
            title={productData?.title}
          />
        </div>
      </div>
      {userSub && (
        <Comment productId={productId} userName={userName} userId={userSub} />
      )}
      <div className="relative flex flex-col gap-10 w-[90%] lg:w-2/3 border border-gray-700 p-6 rounded-xl mx-auto mb-5 lg:pb-10">
        {reviews && (
          <>
            <div className="absolute top-0 left-10 text-[15px] lg:text-[20px] transform -translate-y-1/2 px-4 bg-[#eeedf7]  dark:bg-primary text-blue-500 font-medium">
              {t("comments")} [ {reviews.length} ]
            </div>
            {!userSub && (
              <div className="w-full flex flex-col bg-[#ffe6dd] rounded-sm p-4 *:text-black">
                <span className="font-medium">{t("information")}</span>
                <p>{t("informationMessage")}</p>
              </div>
            )}
            {reviews.map(
              (
                item: { review: string; userId: string; userName: string },
                index: number
              ) => (
                <div
                  key={index}
                  className="flex flex-col border border-gray-700 rounded-xl"
                >
                  <p className="flex justify-between border-b border-gray-700 p-4 text-gray-700 dark:text-gray-400 italic">
                    <span>#{index + 1}</span>
                    <p className="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                      {getNameBySub(item.userId, allUsers, item.userName)}
                    </p>
                  </p>
                  <p className="p-4">{item.review}</p>
                </div>
              )
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
