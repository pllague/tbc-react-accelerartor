import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_KEY } from "../../constants";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  });

  const user = await response.json();
  const cookieStore = cookies();
  if (user.message) {
    cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));
    return redirect("/login");
  }

  if (user.username === formData.get("username")) {
    cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));
    return redirect("/");
  }
  return Response.json(user);
}

export async function GET() {
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE_KEY);

  redirect("/login");
}
