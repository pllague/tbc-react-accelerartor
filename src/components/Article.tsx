import Image from "next/image";
import Link from "next/link";
// import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { formatDate } from "../helpers";

const Article: React.FC<ArticleProps> = ({
  article: { id, title, description, image, date, author },
}) => {
  // const t = useTranslations("Index");
  const locale = useLocale();
  const formattedDate = formatDate(date);
  const trimmedDescription =
    description.length > 255 ? `${description.slice(0, 252)}...` : description;
  return (
    <div className="w-full lg:w-[47%] flex flex-col mb-10">
      <div className="w-full flex flex-col gap-5 items-center">
        <Link
          href={`/${locale}/blog/${id}`}
          className="flex flex-col gap-2 lg:gap-4"
        >
          <div className="w-full">
            <Image
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-xl"
              width={400}
              height={300}
            />
          </div>
          <h2 className="w-fit border-b-[1px] border-gray-600 text-[18px] lg:text-[25px] text-start break-words break-normal">
            {title}
          </h2>
        </Link>
        <div className="py-[15px] w-full flex flex-col gap-4">
          <p className="text-justify">{trimmedDescription}</p>
          <div className="flex justify-between border rounded-2xl border-gray-700 py-2 px-4 text-gray-700 dark:*:text-gray-400 italic">
            <p className="flex gap-2">
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

              <span>{formattedDate}</span>
            </p>
            <span className="text-gray-700 dark:text-gray-400 italic">
              {author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
