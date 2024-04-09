'use client'
import Article from "@/components/Article";
import { useState, useEffect } from "react";


const Blog = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/posts");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setArticles(data.posts);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="w-full p-5 pb-[50px] bg-grey">
            <div className="max-w-[1400px] mx-auto w-full pt-[30px] ">
                <h2 className="text-[40px] leading-[25px] text-center mb-[60px]">Blog</h2>
                {articles.map((article) => (
                    <Article key={article.id} article={article} />
                ))}
            </div>
        </section>
    );
}

export default Blog;