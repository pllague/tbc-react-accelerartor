"use client";
import Products from "./Products";
import Search from "./Search";
import { useState } from "react";
import { useLocale } from "next-intl";

const ProductsWithSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const locale = useLocale();
  return (
    <div className="flex flex-col ">
      <h2 className="text-[40px] text-center pt-5">
        {locale === "en" ? "Products" : "პროდუქტები"}
      </h2>

      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Products searchQuery={searchQuery} selectedCategory={selectedCategory} />
    </div>
  );
};

export default ProductsWithSearch;
