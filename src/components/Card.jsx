import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

const Card = ({ card: { id, title, description, thumbnail } }) => {

    const locale = useLocale();
    // Check if title is more then 25 chars
    const trimmedTitle = title.length > 26 ? `${title.slice(0, 23)}...` : title;

    return (
        <Link href={`/${locale}/products/${id}`}>
            <div className="flex flex-col gap-3 w-[250px] h-[370px] rounded-[10px] border border-light_blue overflow-hidden lg:w-[300px] lg:h-[470px] hover:scale-110 transition duration-300 ease-linear ">
                <div className="w-full min-h-[200px] max-h-[200px] lg:min-h-[250px] lg:max-h-[250px]">
                    <Image
                        className="w-full h-full object-cover object-center"
                        src={thumbnail}
                        alt={title}
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className="flex flex-col gap-3 h-full px-[18px] lg:px-[22px]">

                    <h5 className="text-[15px] leading-[24px] lg:text-[18px] lg:leading-[29px] text-center text-light_blue">
                        {trimmedTitle}
                    </h5>
                    <div className="flex flex-col gap-3 justify-between items-center">
                        <div className="w-full h-[70px] lg:h-[90px] text-[11px] lg:text-[13px] text-wrap">
                            {description}
                        </div>
                        <div className="w-full">
                            <button className="group w-full flex justify-center gap-3 items-center lg:py-2 border border-light_blue rounded-[10px] lg:rounded-[12px] hover:border-orange hover:text-orange transition-all duration-300 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18.524" height="17.75" viewBox="0 0 18.524 17.75">
                                    <g id="Icon_feather-shopping-cart" data-name="Icon feather-shopping-cart" transform="translate(-0.75 -0.75)">
                                        <path className="stroke-primary dark:stroke-white fill-primary dark:fill-white group-hover:stroke-orange group-hover:fill-orange transition-all duration-300 ease-in-out" id="Path_29875" data-name="Path 29875" d="M13.548,30.774A.774.774,0,1,1,12.774,30,.774.774,0,0,1,13.548,30.774Z" transform="translate(-5.083 -13.798)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                                        <path className="stroke-primary dark:stroke-white fill-primary dark:fill-white group-hover:stroke-orange group-hover:fill-orange transition-all duration-300 ease-in-out" id="Path_29876" data-name="Path 29876" d="M30.048,30.774A.774.774,0,1,1,29.274,30,.774.774,0,0,1,30.048,30.774Z" transform="translate(-13.071 -13.798)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                                        <path className="stroke-primary dark:stroke-white fill-primary dark:fill-white group-hover:stroke-orange group-hover:fill-orange transition-all duration-300 ease-in-out" id="Path_29877" data-name="Path 29877" d="M1.5,1.5H4.6L6.669,11.861a1.548,1.548,0,0,0,1.548,1.246h7.521a1.548,1.548,0,0,0,1.548-1.246l1.238-6.492H5.369" transform="translate(0 0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                                    </g>
                                </svg>
                                {locale === 'en' ? "Add to cart" : "კალათაში დამატება"}
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;