import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { formatDate } from "../helpers";

const Article: React.FC<articleProps> = ({
  article: { id, title, description, image, date, author },
}) => {
  const t = useTranslations("Index");
  const locale = useLocale();
  const formattedDate = formatDate(date);
  return (
    <div className="mb-10 border-b border-yellow-600 dark:border-light_blue">
      <h3 className="w-fit border-b-[3px] border-yellow-600 dark:border-light_blue text-[30px] text-start break-words break-normal mb-[20px]">
        {title}
      </h3>

      <div className="w-full flex gap-5 items-center">
        <div className="w-1/4">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            width={300}
            height={300}
          />
        </div>

        <div className="py-[15px] w-3/4 flex flex-col gap-2">
          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <span className="dark:text-light_blue">{formattedDate}</span>
            <span className="dark:text-light_blue">{author}</span>
          </div>
          {description}
          <Link
            href={`/${locale}/blog/${id}`}
            className="w-fit text-[20px] dark:text-light_blue hover:text-orange transition-all duration-300 ease-in-out"
          >
            {t("readMore")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;
