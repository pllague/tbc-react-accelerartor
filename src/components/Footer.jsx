import email_icon from "../assets/icons/email-icon.svg"
import Navigation from './Navigation';

const Footer = () => {
    return (
        <footer className="bg-secondary w-full px-10 py-8 lg:sticky lg:bottom-0 lg:z-10">
            <div className="w-full max-w-[80%] mx-auto">
                <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
                    <div className="flex flex-col lg:mb-0 gap-3 lg:gap-5 *:text-[14px] *:leading-[25px] ">
                        <span>&copy; 2024 React Accelerator</span>
                        <a
                            className="hover:text-light_blue transition-all transform duration-300 ease-linear"
                            href="#"
                        >
                            წესები და პირობები
                        </a>
                        <a
                            className="hover:text-light_blue transition-all transform duration-300 ease-linear"
                            href="#"
                        >
                            კონფიდენციალურობის პოლიტიკა
                        </a>
                    </div>
                    <form className="flex flex-col lg:flex-row h-[65px] bg-white rounded-[100px] items-center p-[5px] ">
                        <img className="hidden lg:flex ml-5" src={email_icon} alt="Email icon"/>
                        <input
                            className="h-full bg-white bg-no-repeat bg-auto border-0 mb-0 px-[25px] text-secondary focus:border-transparent focus:outline-none"
                            maxLength="100"
                            name="email"
                            placeholder="Enter your mail"
                            type="email"
                            required
                        />
                        <input
                            type="submit"
                            className="hidden lg:block bg-blue-500 hover:bg-light_blue rounded-[32px] py-3 px-10 text-[18px] font-medium cursor-pointer transition-all transform duration-300 ease-linear"
                            value="Get our updates"
                        />
                    </form>
                    <input
                            type="submit"
                            className="block lg:hidden -mt-5 bg-blue-500 hover:bg-light_blue rounded-[32px] py-3 px-10 text-[18px] font-medium cursor-pointer transition-all transform duration-300 ease-linear"
                            value="Get our updates"
                        />
                    <Navigation layout="flex-col"/>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;