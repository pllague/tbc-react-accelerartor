import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/costants";

export async function POST(request) {
  const loginData = await request.formData();

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: loginData.get("username"),
      password: loginData.get("password"),
    }),
  });
  const user = await response.json();
  const cookieStore = cookies();
  cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));

  if (response.ok && user.username === loginData.get("username")) {
    return redirect("/");
  }
  return redirect("/login");
}
