import { NextResponse, NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { getSession } from "@auth0/nextjs-auth0/edge";

const protectedRoutes = [
  "/profile",
  "/cart",
  "/orders",
  "/orders/success",
  "/orders/cancel",
];

const protectedRoutesAdmin = ["/admin"];

const publicRoutes = ["/login", "/ka/login", "/en/login"];

export default async function middleware(request: NextRequest) {
  const res = NextResponse.next();

  const session = await getSession(request, res);
  const userId = session?.user?.sub;
  const isAdmin =
    Array.isArray(session?.user?.role) && session?.user.role.includes("Admin");

  // const localeValue = request.cookies.get("NEXT_LOCALE")?.value;

  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  const isProtectedRoutesAdmin = protectedRoutesAdmin.includes(path);

  const isPublicRoute = publicRoutes.includes(path);

  if (isProtectedRoute && !userId) {
    return NextResponse.redirect(new URL("/api/auth/login", request.nextUrl));
  }
  if (isProtectedRoutesAdmin && !isAdmin) {
    return NextResponse.redirect(new URL("/api/auth/login", request.nextUrl));
  }
  if (isPublicRoute && (userId === undefined || userId)) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  // const defaultLocale = request.headers.get("ka") || "en";

  const i18nRouting = createIntlMiddleware({
    locales: ["en", "ka"],
    defaultLocale: "en",
    localePrefix: "never",
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
