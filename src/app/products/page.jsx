"use client";
import Card from "@/components/Card";
import useDebounce from "@/hooks/useDebounce";
import { useState, useEffect } from "react";

const Products = ({ isSorted = false, searchQuery = "" }) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setCards(data.products);
                // setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    let newCards = isSorted ? cards.slice().sort((a, b) => a.title.localeCompare(b.title)) : cards;

    const debouncedSearchQuery = useDebounce(searchQuery, 1000);
    // Filter by searchQuery
    newCards = newCards.filter((product) =>
        product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );

    return (
        <section>
            <div className="w-full py-5 px-5 max-w-[1400px] mx-auto my-10 lg:py-10 lg:px-0">
                <h2 className="text-[40px] leading-[25px] text-center mb-[60px]">Products</h2>
                <div className="flex flex-wrap justify-center mt-[25px] lg:mt-[65px] gap-[25px] lg:gap-10">
                    {newCards.length === 0 ? (
                        <p className="text-[#fdf2e9] text-[2rem] col-span-full justify-self-center">
                            No results found
                        </p>
                    ) : (
                        newCards.map((card) => <Card key={card.id} card={card} />)
                    )}
                </div>
            </div>
        </section>
    );
}

export default Products;