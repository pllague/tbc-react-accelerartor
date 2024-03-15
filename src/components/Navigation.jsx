const Navigation = ({layout}) => {
    return (
        <nav className="w-full lg:max-w-fit lg:bg-transparent ">
            <ul className={"flex w-full h-full justify-end items-start text-medium gap-3 lg:gap-5 " + layout}>
                <li className="cursor-pointer">
                    <a
                        className="hover:text-light_blue leading-[25px] transition duration-300 ease-linear"
                        href="#"
                    >
                        მთავარი
                    </a>
                </li>
                <li className="cursor-pointer">
                    <a
                        className="hover:text-light_blue leading-[25px] transition duration-300 ease-linear"
                        href="#"
                    >
                        პროდუქტები
                    </a>
                </li>
                <li className="cursor-pointer">
                    <a
                        className="hover:text-light_blue leading-[25px] transition duration-300 ease-linear"
                        href="#"
                    >
                        კონტაქტი
                    </a>
                </li>

            </ul>
        </nav>
    );
}

export default Navigation;