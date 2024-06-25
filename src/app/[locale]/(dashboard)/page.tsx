import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const t = useTranslations("Index");
  const locale = useLocale();
  const popularBrandsData = [
    [
      "/assets/nike-minislide.avif",
      "/assets/nike-minilogo.png",
      "Nike",
      "nike mini logo",
    ],
    [
      "/assets/adidas-minislide.avif",
      "/assets/adidas-minilogo.png",
      "Adidas",
      "adidas mini logo",
    ],
    [
      "/assets/kappa-minislide.avif",
      "/assets/kappa-minilogo.png",
      "Kappa",
      "kappa mini logo",
    ],
    [
      "/assets/puma-minislide.avif",
      "/assets/puma-minilogo.png",
      "Puma",
      "puma mini logo",
    ],
    [
      "/assets/umbro-minislide.avif",
      "/assets/umbro-minilogo.png",
      "Umbro",
      "umbro mini logo",
    ],
  ];
  return (
    <section className="w-full flex-col justify-center items-center">
      <div className="relative w-full *:text-white">
        <h1 className="absolute top-0 lg:top-[70px] left-0 lg:left-10 text-[20px] lg:text-[40px] p-5 lg:p-10 flex flex-col">
          <span>{t("heroText1")}</span>
          <span className="ml-0 lg:ml-[160px]">{t("heroText2")}</span>
        </h1>
        <Link
          href={`/${locale}/products`}
          className="absolute group bottom-0 right-0 lg:bottom-10 lg:right-[60px] transform -translate-x-1/2 -translate-y-1/2 text-[15px] lg:text-[25px] hover:text-orange transition-all duration-300 ease-in-out"
        >
          {t("shopNow")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 lg:size-6 inline-block ml-1 transition-transform transform group-hover:translate-x-1.5 duration-300 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
        <div className="w-full ">
          <Image
            src="/assets/adidas-euro-2024-kit.avif"
            alt="Hero image"
            width={1200}
            height={400}
            className="w-full h-full object-cover object-center"
            priority
          />
        </div>
      </div>
      {/* Embrace Greatness */}
      <div className="w-[96%] mx-auto mt-10 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="text-[18px] lg:text-[30px]">
            {t("embraceGreatness")}
          </h2>
          <Link
            href={`/${locale}/blog`}
            className="group text-[15px] lg:text-[20px] hover:text-orange transition-all duration-300 ease-in-out"
          >
            {t("seeAll")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 inline-block ml-1 transition-transform transform group-hover:translate-x-1.5 duration-300 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
        <div className="w-full flex justify-between gap-5 *:text-white">
          <div className="relative w-[32%] max-h-[486px]">
            <Image
              src="/assets/messi-embrace-greatness.webp"
              alt="Messi embrace greatness"
              width={400}
              height={400}
              className="w-full h-full object-cover object-center"
              priority
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
            <Link
              href={`/${locale}/blog/2`}
              className="absolute group bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group text-[12px] lg:text-[18px] hover:text-orange transition-all duration-300 ease-in-out"
            >
              {`MESSI (${t("blog")})`}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 lg:size-4 inline-block ml-1 transition-transform transform group-hover:translate-x-1.5 duration-300 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
          <div className="relative w-[32%] max-h-[486px]">
            <Image
              src="/assets/ronaldo-embrace-greatness.webp"
              alt="Ronaldo embrace greatness"
              width={400}
              height={400}
              className="w-full h-full object-cover object-center"
              priority
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
            <Link
              href={`/${locale}/blog/3`}
              className="absolute group bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group text-[12px] lg:text-[18px] hover:text-orange transition-all duration-300 ease-in-out"
            >
              {`RONALDO (${t("blog")})`}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 lg:size-4 inline-block ml-1 transition-transform transform group-hover:translate-x-1.5 duration-300 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
          <div className="relative w-[32%] max-h-[486px]">
            <Image
              src="/assets/ronaldinho-embrace-greatness.webp"
              alt="Ronaldinho embrace greatness"
              width={400}
              height={400}
              className="w-full h-full object-cover object-center"
              priority
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
            <Link
              href={`/${locale}/blog/4`}
              className="absolute group bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group text-[12px] lg:text-[18px] hover:text-orange transition-all duration-300 ease-in-out"
            >
              {`RONALDINHO (${t("blog")})`}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 lg:size-4 inline-block ml-1 transition-transform transform group-hover:translate-x-1.5 duration-300 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-[96%] mx-auto mt-10">
        <Image
          src="/assets/shop-black-white.avif"
          alt="New York Pop-Up Shop"
          width={1000}
          height={400}
          className="w-full h-full object-cover object-center"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <Link
          href="https://tbc-react-accelerartor-pllagues-projects.vercel.app/contact"
          className="group absolute top-5 lg:top-1/2 right-5 lg:right-[200px] flex flex-col items-end *:text-white"
        >
          <p className="text-[12px] lg:text-[18px] group-hover:text-orange transition-all duration-300 ease-in-out">
            NOW LIVE
          </p>
          <h2 className="text-[15px] lg:text-[30px] group-hover:text-orange transition-all duration-300 ease-in-out">
            New York Pop-Up Shop
          </h2>
          <p className="text-[12px] lg:text-[18px] mt-0 lg:mt-2 group-hover:text-orange transition-all duration-300 ease-in-out">
            323 CANAL ST, NEW YORK, NY 10013, USA
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 inline-block ml-1 transition-transform transform group-hover:translate-x-1.5 duration-300 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </p>
        </Link>
      </div>
      {/* Popular Brands */}
      <div className="w-[96%] mx-auto my-10 flex flex-col gap-4 overflow-x-auto">
        <h2 className="text-[18px] lg:text-[30px]">{t("popularBrands")}</h2>
        <div className="w-full flex justify-between gap-5">
          {popularBrandsData.length &&
            popularBrandsData.map((brand, index) => (
              <div
                key={index}
                className="relative w-[260px] h-[180px] min-w-[260px] min-h-[180px] lg:w-[310px] lg:h-[212px]"
              >
                <Image
                  src={brand[0]}
                  alt={brand[2]}
                  width={200}
                  height={1400}
                  className="w-full h-full object-cover object-center"
                  priority
                />
                <div className="absolute w-full h-[34px] bottom-0 left-0 flex justify-between items-center bg-[#f2f2f2] px-2">
                  <span className="text-black">{brand[2]}</span>
                  <Image
                    src={brand[1]}
                    alt={brand[3]}
                    width={10}
                    height={10}
                    className="w-[20px]"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
