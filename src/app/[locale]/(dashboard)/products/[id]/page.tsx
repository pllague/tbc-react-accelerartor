import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";

// export async function generateStaticParams() {
//   // const response = await fetch(
//   //   process.env.NEXT_PUBLIC_VERCEL_URL + "/api/get-products"
//   // );
//   // const data = await response.json();
//   // console.log(data);
//   try {
//     const response = await fetch(
//       process.env.NEXT_PUBLIC_VERCEL_URL + "/api/get-products"
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await response.json();
//     const paths = data.products.rows.map((product: productElement) => ({
//       id: `${product.id}`,
//     }));
//     console.log(paths);
//     return paths;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

const fetchData = async (productId: number) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_VERCEL_URL + `/api/get-products/${productId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.products.rows[0];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const ProductDetails: React.FC<paramsObj> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const productId = params.id;
  const productData: productElement = await fetchData(productId);
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
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-3 justify-center *:text-black *:dark:text-white *:text-[14px] lg:*:text-[16px] [&_span]:text-orange [&_span]:text-[16px] [&_span]:lg:text-[22px]">
          <p>
            <span>Category: </span>
            {productData?.category}
          </p>
          <p>
            <span>Brand: </span>
            {productData?.brand}
          </p>
          <p>
            <span>Description: </span>
            <p>{productData?.description}</p>
          </p>
          <p>
            <span>Price: </span>
            {productData?.price} &euro;
          </p>
          <p>
            <span>Stock: </span>
            {productData?.stock}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
