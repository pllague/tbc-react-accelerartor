import logo from "../logo.svg";
import Card from './Card';

const Products = () => {
    const cards = [];

    for (let index = 1; index <= 8; index++) {
        // Push the generated product object into the products array
        cards.push({ id: index, logo, index });
    }

    return (
        <section>
            <div className="w-full py-5 px-5 max-w-[1400px] mx-auto my-10 lg:py-10 lg:px-0">
                <h2 className="text-[40px] leading-[25px] text-center mb-[60px]">პროდუქტები</h2>
                <div className="flex flex-wrap justify-center mt-[25px] lg:mt-[65px] gap-[25px] lg:gap-10">
                    {cards.map((card) => (
                        <Card key={card.id} logo={card.logo} index={card.index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Products;