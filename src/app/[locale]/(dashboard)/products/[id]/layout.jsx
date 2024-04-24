export async function generateStaticParams() {
    return [{ locale: "en" }, { locale: "ka" }];
}

const ProductsLayout = ({ children }) => {

    return (
        <>
            {children}
        </>

    );
}

export default ProductsLayout;