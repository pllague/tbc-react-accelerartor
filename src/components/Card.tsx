"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const Card: React.FC<CardProps> = ({
  card: { id, title, category, image, price, brand, stock },
  handleClick,
}) => {
  const locale = useLocale();
  const t = useTranslations("Index");
  // Check if title is more then 25 chars
  const trimmedTitle = title.length > 43 ? `${title.slice(0, 40)}...` : title;

  return (
    <div className="flex flex-col gap-3 w-[250px] h-[370px] rounded-[10px] overflow-hidden lg:w-[300px] lg:h-[470px] shadow-lg shadow-gray-700  hover:scale-[1.03] transition duration-300 ease-linear ">
      <Link href={`/${locale}/products/${id}`}>
        <div className="flex flex-col gap-3 w-full h-[310px] lg:h-[390px]">
          <div className="w-full min-h-[200px] max-h-[200px] lg:min-h-[250px] lg:max-h-[250px]">
            <Image
              className="w-full h-full "
              src={image}
              alt={title}
              width={300}
              height={350}
            />
          </div>
          <div className="flex flex-col gap-3 px-[18px] lg:px-[22px]">
            <h3 className="text-[15px] leading-[24px] lg:text-[20px] lg:leading-[29px] text-center text-black dark:text-white">
              {trimmedTitle}
            </h3>
            <div className="flex gap-3 justify-between *:text-[12px] lg:*:text-[14px]">
              <div className="flex flex-col  gap-2 lg:gap-3">
                <div>
                  <span>{t("category")}: </span>
                  {t(category)}
                </div>
                <div>
                  <span>{t("stoke")}: </span>
                  {t(stock)}
                </div>
              </div>

              <div className="flex flex-col gap-2 lg:gap-3">
                <div>
                  <span>{t("brand")}: </span>
                  {brand}
                </div>
                <div>
                  <span>{t("price")}: </span>
                  {price} $
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div
        className={`w-full px-[35px] lg:px-[50px] ${
          locale === "ka" ? "px-[25px]" : ""
        }`}
      >
        <button
          onClick={() => handleClick(id)}
          className={`group w-full flex justify-center gap-3 items-center py-1 lg:py-2 border border-black dark:border-white rounded-[10px] lg:rounded-[12px] hover:border-orange dark:hover:border-orange hover:text-orange transition-all duration-300 ease-in-out text-[12px] lg:text-[15px] ${
            locale === "ka" ? "gap-1 lg:gap-3" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18.524"
            height="17.75"
            viewBox="0 0 18.524 17.75"
          >
            <g
              id="Icon_feather-shopping-cart"
              data-name="Icon feather-shopping-cart"
              transform="translate(-0.75 -0.75)"
            >
              <path
                className="stroke-primary dark:stroke-white fill-primary dark:fill-white group-hover:stroke-orange group-hover:fill-orange transition-all duration-300 ease-in-out"
                id="Path_29875"
                data-name="Path 29875"
                d="M13.548,30.774A.774.774,0,1,1,12.774,30,.774.774,0,0,1,13.548,30.774Z"
                transform="translate(-5.083 -13.798)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                className="stroke-primary dark:stroke-white fill-primary dark:fill-white group-hover:stroke-orange group-hover:fill-orange transition-all duration-300 ease-in-out"
                id="Path_29876"
                data-name="Path 29876"
                d="M30.048,30.774A.774.774,0,1,1,29.274,30,.774.774,0,0,1,30.048,30.774Z"
                transform="translate(-13.071 -13.798)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                className="stroke-primary dark:stroke-white fill-primary dark:fill-white group-hover:stroke-orange group-hover:fill-orange transition-all duration-300 ease-in-out"
                id="Path_29877"
                data-name="Path 29877"
                d="M1.5,1.5H4.6L6.669,11.861a1.548,1.548,0,0,0,1.548,1.246h7.521a1.548,1.548,0,0,0,1.548-1.246l1.238-6.492H5.369"
                transform="translate(0 0)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
            </g>
          </svg>
          {locale === "en" ? "Add to cart" : "კალათაში დამატება"}
        </button>
      </div>
    </div>
  );
};

export default Card;
