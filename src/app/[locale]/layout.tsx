import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Classic Football Shirts",
  description:
    "Classic Football Shirts Buy Classic Football Jarseys For Your Collection ",
};

const RootLayout: React.FC<ChildrenProps> = ({
  children,
  params: { locale },
}) => {
  return (
    <html lang={locale} suppressHydrationWarning>
      <UserProvider>
        <body className={inter.className}>
          <div className="bg-[#E5E1CC]/30 dark:bg-primary text-primary dark:text-white min-h-screen flex flex-col">
            <Providers>{children}</Providers>
          </div>
        </body>
      </UserProvider>
    </html>
  );
};

export default RootLayout;
