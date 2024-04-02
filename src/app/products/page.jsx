"use client";
import Card from "@/components/Card";
import useDebounce from "@/hooks/useDebounce";

const cards = [
    {
        id: 1,
        title: "Zeta Zephyrs",
        description: "Leading the way in pioneering technology.",
    },
    {
        id: 2,
        title: "Kappa Keys",
        description: "Solutions designed for tomorrow's challenges.",
    },
    {
        id: 3,
        title: "Gamma Creations",
        description: "Creativity and innovation in one place.",
    },
    {
        id: 4,
        title: "Theta Tech",
        description: "Dynamic solutions for a dynamic world.",
    },
    {
        id: 5,
        title: "Epsilon Electronics",
        description: "Electrifying the future with innovative electronics.",
    },
    {
        id: 6,
        title: "Alpha Innovations",
        description: "Breezing through innovation and design.",
    },
    {
        id: 7,
        title: "Eta Engineering",
        description: "Engineering your dreams into reality.",
    },
    {
        id: 8,
        title: "Delta Dynamics",
        description: "At the forefront of technological advancement.",
    },
    {
        id: 9,
        title: "Iota Ideas",
        description: "Where great ideas come to life.",
    },
    {
        id: 10,
        title: "Beta Solutions",
        description: "Unlocking the potential of the future.",
    },
    {
        id: 11,
        title: "Lambda Lights",
        description: "Illuminating the world with innovative lighting solutions.",
    },
    {
        id: 12,
        title: "Mu Mechanics",
        description: "Mechanical mastery for a modern age.",
    },
    {
        id: 13,
        title: "Nu Networks",
        description: "Networking the world, one connection at a time.",
    },
    {
        id: 14,
        title: "Xi Xylophones",
        description: "Harmonizing technology and music.",
    },
    {
        id: 15,
        title: "Omicron Optics",
        description: "Visionary optics for a clearer tomorrow.",
    },
    {
        id: 16,
        title: "Pi Programming",
        description: "Coding the future, one line at a time.",
    },
    {
        id: 17,
        title: "Rho Robotics",
        description: "Revolutionizing the world with cutting-edge robotics.",
    },
    {
        id: 18,
        title: "Sigma Software",
        description: "Software solutions that transcend the ordinary.",
    },
    {
        id: 19,
        title: "Tau Technolog",
        description: "each that transforms and transcends.",
    },
    {
        id: 20,
        title: "Upsilon Utilities",
        description: "Utility solutions for the modern era.",
    },
    {
        id: 21,
        title: "Phi Solutions",
        description: "Solutions designed for complex challenges.",
    },
    {
        id: 22,
        title: "Chi Innovations",
        description: "Innovating for a sustainable future.",
    },
    {
        id: 23,
        title: "Psi Products",
        description: "Products that exceed expectations.",
    },
    {
        id: 24,
        title: "Omega Optics",
        description: "Optical solutions for every need.",
    },
];

const Products = ({ isSorted = false, searchQuery = "" }) => {

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