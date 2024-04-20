import Image from "next/image";

export async function generateStaticParams() {
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json();

    const paths = data.products.map((product) => ({ params: { id: product.id }, }));

    return paths;
}

const fetchData = async (productId) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};


const ProductDetails = async ({ params }) => {

    const productId = params.id;
    const productData = await fetchData(productId);

    return (
        <section>
            <div className="w-full flex flex-col lg:flex-row gap-7 lg:gap-10 justify-between py-5 px-5 max-w-[1000px] mx-auto my-10 lg:py-10 lg:px-0">
                <div className="w-full lg:w-2/3 flex flex-col gap-5 lg:gap-7">
                    <h2 className="text-[25px] leading-[25px] lg:text-[40px] lg:leading-[45px] text-center text-light_blue">{productData?.title}</h2>
                    <div className="w-full rounded-2xl overflow-hidden">
                        <Image src={productData?.thumbnail} alt={productData?.title} width={1000} height={1000} className="w-full h-full object-cover object-center" />
                    </div>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col gap-3 justify-center *:text-light_blue *:text-[14px] lg:*:text-[16px] [&_span]:text-orange [&_span]:text-[16px] [&_span]:lg:text-[22px]">
                    <p><span>Category: </span>{productData?.category}</p>
                    <p><span>Brand: </span>{productData?.brand}</p>
                    <p><span>Description: </span>{productData?.description}</p>
                    <p><span>Price: </span>{productData?.price} &euro;</p>
                    <p><span>In Stock: </span>{productData?.stock}</p>
                </div>
            </div>

        </section>);
}

export default ProductDetails;