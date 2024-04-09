import Link from "next/link";
import Image from "next/image";
// import email_icon from "/assets/icons/email-icon.svg";
import Navigation from './Navigation';

const Footer = () => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <footer className="bg-secondary w-full px-10 py-8 "> {/* lg:sticky lg:bottom-0 lg:z-10 */}
            <div className="w-full max-w-[90%] mx-auto">
                <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
                    <div className="flex flex-col lg:mb-0 gap-3 lg:gap-5 *:text-[14px] *:leading-[25px] ">
                        <span>&copy; {currentYear} React Accelerator</span>
                        <Link href="#"
                            className="hover:text-orange transition-all transform duration-300 ease-linear"

                        >
                            Privacy & Policy
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-orange transition-all transform duration-300 ease-linear"

                        >
                            Terms
                        </Link>
                    </div>
                    <form className="flex flex-col lg:flex-row h-[50px] lg:h-[65px] bg-white rounded-[100px] items-center p-[5px] ">
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="mr-2 lg:mr-0 lg:ml-3"><Image src="/assets/icons/email-icon.svg" alt="Email icon" width={24}
                                height={24} /></div>
                            <input
                                className="h-full bg-white border-0 rounded-[100px] mb-0 px-0 lg:text-[20px] lg:px-[25px] text-secondary focus:border-transparent focus:outline-none"
                                maxLength="100"
                                name="email"
                                placeholder="Enter your mail"
                                type="email"
                                required
                            /></div>
                        <input
                            type="submit"
                            className="hidden lg:block bg-blue-500 hover:bg-orange rounded-[32px] py-3 px-10 text-[18px] font-medium cursor-pointer transition-all transform duration-300 ease-linear"
                            value="Get our updates"
                        />
                    </form>
                    <input
                        type="submit"
                        className="block lg:hidden -mt-5 bg-blue-500 hover:bg-orange rounded-[32px] py-2 px-10 text-[18px] font-medium cursor-pointer transition-all transform duration-300 ease-linear"
                        value="Get our updates"
                    />
                    <Navigation layout="flex-col" />

                </div>
            </div>
        </footer>
    );
}

export default Footer;