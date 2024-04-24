"use client";
import Products from "./products/page";
import Search from "@/components/Search";
import { useState } from "react";
// import Blog from "../blog/Blog";

const Home = () => {
  const [isSorted, setIsSorted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col justify-between">
      <Search
        isSorted={isSorted}
        setIsSorted={setIsSorted}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Products isSorted={isSorted} searchQuery={searchQuery} />
      {/* <Blog quantity={5}/> */}
    </div>
  );
};

export default Home;