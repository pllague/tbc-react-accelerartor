import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";
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
    (product: productElement) => product.id == params.id
  );

  return {
    title: `${product?.title}`,
    description: `${product?.description}`,
  };
}

const ProductDetails: React.FC<paramsObj> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);
  const productId = params.id;
  const productData: productElement = await getDetailedProduct(productId);
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

  function getNameBySub(sub: string, allUsers: User[]) {
    const user = allUsers.find((item) => item.sub === sub);
    return user ? user.name : null;
  }

  const allUsers = await getUsers();
  const reviews = await getReviews(productData?.id);

  return (
    <section>
      <div className="w-full flex flex-col lg:flex-row gap-7 lg:gap-10 justify-between py-5 px-5 max-w-[1000px] mx-auto my-10 lg:py-10 lg:px-0">
        <div className="w-full lg:w-2/3 flex flex-col gap-5 lg:gap-7">
          <h2 className="text-[25px] leading-[25px] lg:text-[40px] lg:leading-[45px] text-center text-black dark:text-white">
            {productData?.title}
          </h2>
          <div className="w-full rounded-2xl overflow-hidden">
            <Image
              src={productData?.image}
              alt={productData?.title}
              width={600}
              height={700}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-3 justify-center *:text-black *:dark:text-white *:text-[14px] lg:*:text-[16px] [&_span]:text-orange [&_span]:text-[16px] [&_span]:lg:text-[22px]">
          <div className="flex gap-1 items-center">
            <span>Rating: </span>
            {averageRating.toFixed(2)} out of 5
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#FF0000"
              stroke="#FF0000"
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
                {userRatingObject?.rating ? "Your rate:" : "Rate us:"}
              </span>
              <Rating
                productId={productData?.id}
                userId={userSub}
                tempRatingProps={userRatingObject?.rating}
              />
            </div>
          )}
          <div>
            <span>Category: </span>
            {productData?.category}
          </div>
          <div>
            <span>Brand: </span>
            {productData?.brand}
          </div>
          <div>
            <span>Price: </span>
            {productData?.price} &euro;
          </div>
          <div>
            <span>Stock: </span>
            {productData?.stock}
          </div>
          <div>
            <span>Description: </span>
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
      <div className="flex flex-col gap-10">
        {reviews &&
          reviews.map(
            (
              item: { review: string; userId: string; userName: string },
              index: number
            ) => (
              <div key={index}>
                <p>{getNameBySub(item.userId, allUsers)}</p>
                <p>{item.review}</p>
              </div>
            )
          )}
      </div>
    </section>
  );
};

export default ProductDetails;
