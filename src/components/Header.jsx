import logo from "../logo.svg";
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="w-full h-[70px] lg:h-[85px] bg-secondary/90 sticky top-0 z-10">
            <div className="w-full h-full flex mx-auto justify-between lg:items-center max-w-[1400px]">
                {/* logo */}
                <a className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]" href="/">
                    <img src={logo} className="w-full h-full" alt="logo" />
                </a>
                {/* main navigation */}
                <Navigation />
            </div>
        </header>
    );
}

export default Header;