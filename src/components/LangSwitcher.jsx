'use client'

import { usePathname } from 'next/navigation'
import { useLocale } from "next-intl";
import Link from 'next/link';
const LangSwitcher = () => {

    const locale = useLocale();
    let pathname = usePathname();
    let langEn = '';
    let langKa = '';

    if (pathname === '/en') {
        langKa = '/ka';
    } else if (pathname === '/ka') {
        langEn = '/en';
    } else {
        if (locale === 'en') {
            langKa = pathname.replace('/en/', '/ka/');
        } else if (locale === 'ka') {
            langEn = pathname.replace('/ka/', '/en/');
        }
    }

    return (
        <div className="cursor-pointer">
            <Link href={`${langEn}`} className={`p-3 text-[18px] hover:text-orange transition-all transform duration-300 ease-linear ${locale === 'en' ? 'text-orange' : ''}`}>en</Link> |
            <Link href={`${langKa}`} className={`p-3 text-[18px] hover:text-orange transition-all transform duration-300 ease-linear ${locale === 'ka' ? 'text-orange' : ''}`}>ka</Link>
        </div>
    );
}

export default LangSwitcher;