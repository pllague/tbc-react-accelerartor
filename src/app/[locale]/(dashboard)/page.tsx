import { useTranslations } from "next-intl";
import Image from "next/image";

const Home = () => {
  const t = useTranslations("Index");
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
    <section className="w-[96%] mx-auto flex-col justify-center items-center">
      <h1 className="text-[25px] lg:text-[40px] p-10">{t("heroText")}</h1>
      {/* Popular Brands */}
      <div className="w-full flex flex-col gap-4 overflow-x-auto">
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
                  width={100}
                  height={70}
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
