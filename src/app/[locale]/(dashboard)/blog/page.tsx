import Article from "../../../../components/Article";
import { useLocale } from "next-intl";

const fetchData = async () => {
    try {
        const response = await fetch("https://dummyjson.com/posts");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data.posts;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

const Blog = async () => {

    const locale = useLocale();
    const articles: postElement[] = await fetchData();

    return (
        <section className="w-full p-5 pb-[50px] bg-[#E5E1CC]/30 dark:bg-grey">
            <div className="max-w-[1400px] mx-auto w-full pt-[30px] ">
                <h2 className="text-[40px] leading-[25px] text-center mb-[60px]">{locale === "en" ? "Blog" : "ბლოგი"}</h2>
                {articles?.map((article) => (
                    <Article key={article.id} article={article} />
                ))}
            </div>
        </section>
    );
}

export default Blog;