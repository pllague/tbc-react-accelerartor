import { useTranslations } from "next-intl";

const categories: Category[] = [
  { id: "all", name: "All" },
  { id: "Shirt", name: "Shirt" },
  { id: "Shorts", name: "Shorts" },
];

const Search: React.FC<SearchProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  displayFilter = true,
}) => {
  const t = useTranslations("Index");

  function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    const pattern = /[^a-z0-9]/gi;
    setSearchQuery(event.target.value.replace(pattern, ""));
  }

  function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedCategory(event.target.value);
  }

  return (
    <section className="w-full pt-3">
      <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto h-[100px] lg:h-[65px] justify-center items-center gap-3 lg:gap-7 ">
        <form className="w-[70%] lg:w-[50%] h-[30px] lg:h-[40px] flex items-center bg-white dark:bg-[#121212] rounded-[100px] px-2 lg:px-5">
          <svg
            className="hidden lg:block w-[10px] h-[10px] lg:w-[15px] lg:h-[15px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.641 19.641"
          >
            <g
              id="Icon_feather-search"
              data-name="Icon feather-search"
              transform="translate(-3.5 -3.5)"
            >
              <path
                className="stroke-[#57676f]"
                data-name="Path 29869"
                d="M19.813,12.156A7.656,7.656,0,1,1,12.156,4.5a7.656,7.656,0,0,1,7.656,7.656Z"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <path
                className="stroke-[#57676f] peer-focuse:"
                data-name="Path 29870"
                d="M29.138,29.138l-4.163-4.163"
                transform="translate(-7.412 -7.412)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </g>
          </svg>
          <input
            className="w-full h-full border-0 px-2 lg:px-[25px] rounded-[100px] text-secondary lg:text-[16px] focus:border-transparent focus:outline-none dark:text-white"
            maxLength={100}
            name="search"
            placeholder={t("searchPlaceholder")}
            type="search"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            value={searchQuery}
            onChange={handleQueryChange}
          />
        </form>

        {displayFilter && (
          <div className="w-[70%] lg:w-[25%] h-[30px] lg:h-[40px] flex gap-1 items-center text-secondary dark:text-white">
            <span className="text-[15px]">{t("filter")}</span>
            <div className="w-full h-full pr-3 bg-white dark:bg-[#121212] rounded-[100px] cursor-pointer">
              <select
                onChange={handleCategoryChange}
                value={selectedCategory}
                className="w-full h-full bg-white dark:bg-[#121212] rounded-[100px] px-2 lg:px-5 focus:border-transparent focus:outline-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {t(category.name)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Search;
