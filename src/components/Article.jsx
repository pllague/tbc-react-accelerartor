import Image from "next/image";
const Article = ({ title, text, image, createDate }) => {
    return (
        <div className="mb-10 border-b border-light_blue">
            <h3 className="w-fit border-b-[3px] border-light_blue text-[30px] text-start break-words break-normal mb-[20px]">{title}</h3>

            <div className="w-full flex gap-5 items-center">
                <div className="w-1/4">
                    <Image src={image} alt="blog" className="w-full h-full object-cover" width={692} height={330} />
                </div>

                <div className="py-[15px] w-3/4 flex flex-col gap-2">
                    <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-light_blue">{createDate}</span>
                    </div>
                    {text}
                    <a href="#" className="w-fit text-[20px] text-light_blue hover:text-orange transition-all duration-300 ease-in-out">Read more ...</a>
                </div>
            </div>

        </div>
    );
}

export default Article;