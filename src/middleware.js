import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/costants";

export function middleware(request) {
  const cookieStore = cookies();
  if (!cookieStore.has(AUTH_COOKIE_KEY)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/products",
    "/products/:path*",
    "/blog",
    "/blog/:path*",
    "/contact",
    "/profile",
  ],
};
