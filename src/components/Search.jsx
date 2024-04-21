import { useLocale } from "next-intl";

const Search = ({ isSorted, setIsSorted, searchQuery, setSearchQuery }) => {

    const locale = useLocale();

    function handleClick() {
        setIsSorted((prev) => !prev)
    }

    const pattern = /[^a-z0-9]/gi;
    // set search query
    function handleChange(event) {
        setSearchQuery((prev) => (prev = event.target.value).replace(pattern, ""));
    }

    return (
        <section className="w-full pt-20">
            <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto h-[100px] lg:h-[65px] justify-center items-center gap-3 lg:gap-5 ">
                <form className="w-[70%] lg:w-[50%] h-[50px] lg:h-[65px] flex items-center bg-white rounded-[100px] px-2 lg:px-5">
                    <svg className="hidden lg:block w-[15px] h-[15px] lg:w-[25px] lg:h-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.641 19.641">
                        <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3.5 -3.5)">
                            <path className="stroke-[#57676f]" data-name="Path 29869" d="M19.813,12.156A7.656,7.656,0,1,1,12.156,4.5a7.656,7.656,0,0,1,7.656,7.656Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path className="stroke-[#57676f] peer-focuse:" data-name="Path 29870" d="M29.138,29.138l-4.163-4.163" transform="translate(-7.412 -7.412)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </g>
                    </svg>
                    <input
                        className="w-full h-full border-0 px-2 lg:px-[25px] rounded-[100px] text-secondary lg:text-[22px] focus:border-transparent focus:outline-none"
                        maxLength="100"
                        name="search"
                        placeholder={locale === 'en' ? "Type to search ..." : "ძებნა ..."}
                        type="search"
                        autoCapitalize="none"
                        autoComplete="off"
                        spellCheck="false"
                        value={searchQuery}
                        onChange={handleChange}
                    />

                </form>

                <button
                    onClick={handleClick}
                    className={"w-[70%] lg:w-[15%] lg:h-full bg-blue-500 hover:bg-orange rounded-[100px] py-2 lg:py-auto px-7 font-small lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear" + (locale === 'ka' ? ' lg:text-[16px]' : ' lg:text-[22px]')}
                >
                    {isSorted ? (locale === 'en' ? "Reset" : "გადატვირთვა") : (locale === 'en' ? "Sort by title" : "დალაგება სათურით")}
                </button>
            </div>
        </section>
    );
}

export default Search;