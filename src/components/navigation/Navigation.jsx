import { Link } from "react-router-dom";

const Navigation = ({ layout }) => {
    return (
        <nav className="w-full lg:max-w-fit lg:bg-transparent ">
            <ul className={"flex w-full h-full justify-end items-start text-medium gap-3 lg:gap-5 " + layout}>
                <li className="cursor-pointer">
                    <Link to="/"
                        className="hover:text-orange leading-[25px] transition duration-300 ease-linear"

                    >
                        Home
                    </Link>
                </li>
                <li className="cursor-pointer">
                    <Link to="/products"
                        className="hover:text-orange leading-[25px] transition duration-300 ease-linear"

                    >
                        Products
                    </Link>
                </li>
                <li className="cursor-pointer">
                    <Link to="contact"
                        className="hover:text-orange leading-[25px] transition duration-300 ease-linear"

                    >
                        Contact
                    </Link>
                </li>

            </ul>
        </nav>
    );
}

export default Navigation;