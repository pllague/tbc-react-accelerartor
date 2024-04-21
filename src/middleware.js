// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "@/costants";
import createMiddleware from "next-intl/middleware";

// export function middleware(request) {
//   const cookieStore = cookies();
//   if (!cookieStore.has(AUTH_COOKIE_KEY)) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

// }

export default createMiddleware({
  locales: ["en", "ka"],
  defaultLocale: "en",
});

// export const config = {
//   matcher: [
//     "/",
//     "/products",
//     "/products/:path*",
//     "/blog",
//     "/blog/:path*",
//     "/contact",
//     "/profile",
//   ],
// };

export const config = {
  matcher: [
    "/((?!api|login|_next/static|_next/image|images|favicon.ico|logo.svg|assets).*)",
  ],
};

// export const config = {
//   matcher: [
//     "/",
//     "/(ka|en)",
//     "/(ka|en)/products",
//     "/(ka|en)/products/:path*",
//     "/(ka|en)/blog",
//     "/(ka|en)/blog/:path*",
//     "/(ka|en)/contact",
//     "/(ka|en)/profile",
//   ],
// };

// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "./constants";

// export function middleware(request) {
//   const cookieStore = cookies().get(AUTH_COOKIE_KEY);
//   const { pathname } = request.nextUrl;
//   if (!cookieStore?.value && !pathname.startsWith("/login")) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
//   if (cookieStore?.value && pathname.startsWith("/login")) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
