export async function generateStaticParams() {
    return [{ locale: "en" }, { locale: "ka" }]
}

const BlogLayout = ({ children }) => {

    return (
        <>
            {children}
        </>

    );
}

export default BlogLayout;