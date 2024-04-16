import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/costants";
import { redirect } from "next/navigation";

export async function login(username, password) {
  "use server";
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const user = response.json();
  const cookieStore = cookies();
  cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));
}

export async function logOut() {
  "use server";
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE_KEY);
  return redirect("/login");
}
