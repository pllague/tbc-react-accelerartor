'use client';
import { useLocale } from "next-intl";
const LogOut = () => {
    const locale = useLocale();
    return (
        <form action="/api" method="GET">
            <button className="group mt-[5px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 group-hover:stroke-orange transition-all transform duration-300 ease-linear">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>
            </button>
        </form>
    )
}
export default LogOut;
