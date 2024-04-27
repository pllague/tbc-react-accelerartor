export async function generateStaticParams() {
    return [{ locale: "en" }, { locale: "ka" }]
}

const BlogLayout: React.FC<childrenProps> = ({ children }) => {

    return (
        <>
            {children}
        </>

    );
}

export default BlogLayout;