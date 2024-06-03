import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TBC React Accelerator",
  description: "Generated by create next app",
};

const RootLayout: React.FC<childrenProps> = ({
  children,
  params: { locale },
}) => {
  return (
    <html lang={locale} suppressHydrationWarning>
      <UserProvider>
        <body className={inter.className}>
          <div className="bg-[#E5E1CC]/30 dark:bg-primary text-primary dark:text-white min-h-screen flex flex-col justify-between">
            <Providers>{children}</Providers>
          </div>
        </body>
      </UserProvider>
    </html>
  );
};

export default RootLayout;
