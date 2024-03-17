const Search = () => {
    return (
        <section className="w-full pt-20">
            <form className="max-w-[1400px] mx-auto flex h-[50px] lg:h-[65px] justify-center gap-3 lg:gap-5 ">
                <div className="w-[55%] lg:w-[50%] h-full flex  items-center bg-white rounded-[100px] px-2 lg:px-5">
                    <svg className="hidden lg:block w-[15px] h-[15px] lg:w-[25px] lg:h-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.641 19.641">
                        <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3.5 -3.5)">
                            <path className="stroke-[#57676f]" data-name="Path 29869" d="M19.813,12.156A7.656,7.656,0,1,1,12.156,4.5a7.656,7.656,0,0,1,7.656,7.656Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path className="stroke-[#57676f] peer-focuse:" data-name="Path 29870" d="M29.138,29.138l-4.163-4.163" transform="translate(-7.412 -7.412)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </g>
                    </svg>
                    <input
                        className="w-full h-full border-0 px-2 lg:px-[25px] rounded-[100px] text-secondary lg:text-[22px] focus:border-transparent focus:outline-none"
                        maxLength="100"
                        name="search_query"
                        placeholder="Type to search ..."
                        type="search"
                        autoCapitalize="none"
                        autoComplete="off"
                        spellCheck="false"
                    />

                </div>

                <input
                    type="submit"
                    className="hidden h-full lg:block bg-blue-500 hover:bg-orange rounded-[100px] py-auto px-7 text-[22px] font-medium cursor-pointer transition-all transform duration-300 ease-linear"
                    value="Search"
                />
                <div className="block relative w-fit h-full lg:hidden">
                    <input
                        type="submit"
                        className="h-full bg-blue-500 rounded-full py-3 px-8 cursor-pointer transition-all transform duration-300 ease-linear"
                        value=""
                    />
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 19.641 19.641">
                        <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3.5 -3.5)">
                            <path className="stroke-white" data-name="Path 29869" d="M19.813,12.156A7.656,7.656,0,1,1,12.156,4.5a7.656,7.656,0,0,1,7.656,7.656Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path className="stroke-white" data-name="Path 29870" d="M29.138,29.138l-4.163-4.163" transform="translate(-7.412 -7.412)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </g>
                    </svg>
                </div>
                
            </form>
        </section>
    );
}

export default Search;