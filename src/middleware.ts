import { NextResponse, NextRequest } from "next/server";
import { AUTH_COOKIE_KEY } from "./constants";
import createIntlMiddleware from "next-intl/middleware";
const protectedRoutes = [
  "/",
  "/en",
  "/ka",
  "/profile",
  "/contact",
  "/products",
  "/blog",
  "/about",
  "/admin",
  "/checkout",
];

const publicRoutes = ["/login", "/ka/login", "/en/login"];

export default async function middleware(request: NextRequest) {
  //Middleware for rout protections
  const cookie = request.cookies.get(AUTH_COOKIE_KEY)?.value;
  let token = null;

  if (cookie) {
    const cookieObject = JSON.parse(cookie);
    if (cookieObject) {
      token = cookieObject?.token;
    }
  }
  // const localeValue = request.cookies.get("NEXT_LOCALE")?.value;

  const path = request.nextUrl.pathname;
  const isProtectedRoute =
    protectedRoutes.includes(path) ||
    path.includes("/blog") ||
    path.includes("/products");

  const isPublicRoute = publicRoutes.includes(path);

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  // if (path === "/" && token) {
  //   return NextResponse.redirect(new URL(`/${localeValue}`, request.nextUrl));
  // }

  // const defaultLocale = request.headers.get("ka") || "en";

  const i18nRouting = createIntlMiddleware({
    locales: ["en", "ka"],
    defaultLocale: "en",
    localePrefix: 'never',

  });
  const response = i18nRouting(request);

  // response.headers.set("ka", defaultLocale);

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|logo.svg|assets).*)",
    // "/",
    // "/(ka|en)/:path*",
  ],
};
