"use client";
import Article from "./Article";
import { useLocale } from "next-intl";
import { getBlogs } from "../app/api";
import { useDebounce } from "../hooks/hooks";
import { useState, useEffect } from "react";
import LoadingAnimation from "./LoadingAnimation";

const Blogs = ({ searchQuery = "" }) => {
  const locale = useLocale();
  const [articles, setArticles] = useState<PostElement[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const Blogs = await getBlogs();
        setArticles(Blogs);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  let newBlogs = articles.filter(
    (blog) =>
      blog.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
      blog.description
        .toLowerCase()
        .includes(debouncedSearchQuery.toLowerCase())
  );

  return (
    <section className="w-full p-5 pb-[50px]">
      {articles.length === 0 ? (
        <LoadingAnimation />
      ) : (
        <div className="max-w-[1400px] mx-auto w-full pt-[30px] ">
          {newBlogs.length === 0 ? (
            <div className="text-center text-xl mt-10">
              {locale === "en" ? "Blog not found" : "ბლოგი არ მოიძებნა"}
            </div>
          ) : (
            <>
              {newBlogs?.map((article) => (
                <Article key={article.id} article={article} />
              ))}
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Blogs;
