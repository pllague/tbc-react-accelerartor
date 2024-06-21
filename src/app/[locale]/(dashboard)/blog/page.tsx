import Article from "../../../../components/Article";
import { useLocale } from "next-intl";
import { getBlogs } from "../../../api";

export const metadata = {
  title: "Classic Football Shirts - Blog",
  description: "Blog page",
};

const Blog = async () => {
  const locale = useLocale();
  const articles: postElement[] = await getBlogs();

  return (
    <section className="w-full p-5 pb-[50px] bg-[#E5E1CC]/30 dark:bg-grey">
      <div className="max-w-[1400px] mx-auto w-full pt-[30px] ">
        <h2 className="text-[40px] leading-[25px] text-center mb-[60px]">
          {locale === "en" ? "Blog" : "ბლოგი"}
        </h2>
        {articles?.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
