import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Article: React.FC<articleProps> = ({ article: { id, title, body } }) => {

    const t = useTranslations('Index');
    const createDate = "07.07.2077";
    const imageUrl = "/assets/euro2024.png";

    return (
        <div className="mb-10 border-b border-yellow-600 dark:border-light_blue">
            <h3 className="w-fit border-b-[3px] border-yellow-600 dark:border-light_blue text-[30px] text-start break-words break-normal mb-[20px]">{title}</h3>

            <div className="w-full flex gap-5 items-center">
                <div className="w-1/4">
                    <Image src={imageUrl} alt={title} className="w-full h-full object-cover" width={692} height={330} />
                </div>

                <div className="py-[15px] w-3/4 flex flex-col gap-2">
                    <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="dark:text-light_blue">{createDate}</span>
                    </div>
                    {body}
                    <Link href={"/blog/" + id} className="w-fit text-[20px] dark:text-light_blue hover:text-orange transition-all duration-300 ease-in-out">{t("readMore")}</Link>
                </div>
            </div>

        </div>
    );
}

export default Article;