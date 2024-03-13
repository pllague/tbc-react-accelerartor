const Article = ({ title, text }) => {
    return (
        <div className="mb-10 border-b border-light_blue">
            <h3 className="text-[30px] text-left break-words break-normal mb-[20px]">{title}</h3>

            <div className="py-[15px]">
                {text}
            </div>
        </div>
    );
}

export default Article;