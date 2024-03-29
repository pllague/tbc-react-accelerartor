import Article from "../../Article";
import euroImage from"../../../euro2024.png";

const Blog = ({quantity=20}) => {

    const articles = [];

    let title = "";

    let createDate = "07.07.2077"

    const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    for (let index = 1; index <= quantity; index++) {
        title = "საქართველო ევროპის ჩემპიონატზეა " + index;
        articles.push({ id: index, title, text, createDate });
    }

    return (
        <section className="w-full p-5 pb-[50px] bg-grey">
            <div className="max-w-[1400px] mx-auto w-full pt-[30px] ">
                <h2 className="text-[40px] leading-[25px] text-center mb-[60px]">Blog</h2>
                {articles.map((article) => (
                    <Article key={article.id} title={article.title} text={article.text} createDate={article.createDate} image={euroImage} />
                ))}
            </div>
        </section>
    );
}

export default Blog;