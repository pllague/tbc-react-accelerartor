import Products from '../products/Products';
// import Blog from '../blog/Blog';
import Search from '../../Search';

import { useState } from "react";

const Home = () => {

    const [isSorted, setIsSorted] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <main className="flex flex-col justify-between">
            <Search
                isSorted={isSorted}
                setIsSorted={setIsSorted}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery} />
            <Products isSorted={isSorted} searchQuery={searchQuery} />
            {/* <Blog quantity={5}/> */}
        </main>
    );
}

export default Home;