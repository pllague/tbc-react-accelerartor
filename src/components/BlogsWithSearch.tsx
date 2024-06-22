"use client";
import Blogs from "./Blogs";
import Search from "./Search";
import { useState } from "react";
import { useLocale } from "next-intl";

const BlogsWithSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const locale = useLocale();

  return (
    <div className="flex flex-col ">
      <h2 className="text-[40px] text-center pt-5">
        {locale === "en" ? "Blog" : "ბლოგი"}
      </h2>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        displayFilter={false}
      />
      <Blogs searchQuery={searchQuery} />
    </div>
  );
};

export default BlogsWithSearch;
