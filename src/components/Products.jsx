import logo from "../logo.svg";
import Card from './Card';

const Products = () => {
    const cards = [];
    let description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    description = description.length > 100 ? description.substring(0, 100) + "..." : description;
    
    for (let index = 1; index <= 8; index++) {
        // Push the generated product object into the products array
        cards.push({ id: index, logo, index, description});
    }

    return (
        <section>
            <div className="w-full py-5 px-5 max-w-[1400px] mx-auto my-10 lg:py-10 lg:px-0">
                <h2 className="text-[40px] leading-[25px] text-center mb-[60px]">Products</h2>
                <div className="flex flex-wrap justify-center mt-[25px] lg:mt-[65px] gap-[25px] lg:gap-10">
                    {cards.map((card) => (
                        <Card key={card.id} logo={card.logo} index={card.index} description={card.description}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Products;