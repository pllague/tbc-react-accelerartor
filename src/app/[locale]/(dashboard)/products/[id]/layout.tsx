export async function generateStaticParams() {
    return [{ locale: "en" }, { locale: "ka" }];
}

const ProductsLayout: React.FC<childrenProps> = ({ children }) => {

    return (
        <>
            {children}
        </>

    );
}

export default ProductsLayout;