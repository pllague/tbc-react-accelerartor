"use client";
import Products from "../../../components/Products";
import Search from "../../../components/Search";
import { useState } from "react";

const Home = () => {
  const [isSorted, setIsSorted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col">
      <Search
        isSorted={isSorted}
        setIsSorted={setIsSorted}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Products isSorted={isSorted} searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
