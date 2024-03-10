const Navigation = () => {
    return (
        <nav className="w-full lg:max-w-[600px] lg:bg-transparent ">
            <ul className="flex w-full h-full justify-end items-center text-medium">
                <li className="cursor-pointer pl-[50px]">
                    <a
                        className="hover:text-light_blue leading-[25px] transition duration-300 ease-linear"
                        href="#"
                    >
                        მთავარი
                    </a>
                </li>
                <li className="cursor-pointer pl-[50px]">
                    <a
                        className="hover:text-light_blue leading-[25px] transition duration-300 ease-linear"
                        href="#"
                    >
                        პროდუქტები
                    </a>
                </li>
                <li className="cursor-pointer pl-[50px]">
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