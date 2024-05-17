// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "@/costants";
// import { redirect } from "next/navigation";
"use server";
import { revalidatePath } from "next/cache";
import {
  addToCart,
  clearCart,
  createUser,
  decrementProductQuantity,
  deleteUser,
  removeProductFromCart,
  updateUser,
} from "./api";

// export async function login(username, password) {
//   "use server";
//   try {
//     const response = await fetch("https://dummyjson.com/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         username,
//         password,
//       }),
//     });
//     const user = await response.json();
//     const cookieStore = cookies();
//     cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// export async function logOut(lang) {
//   "use server";
//   const cookieStore = cookies();
//   cookieStore.delete(AUTH_COOKIE_KEY);
//   redirect("/" + lang + "/login");
// }

export async function createUserAction(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);
  createUser(name as string, email as string, age as string);
  revalidatePath("/admin");
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
  revalidatePath("/admin");
}

export async function updateUserAction(formData: FormData) {
  const { id, name, email, age } = Object.fromEntries(formData);
  updateUser(id as string, name as string, email as string, age as string);
  revalidatePath("/admin");
}

export async function addToCartAction(id: number) {
  await addToCart(id);
  revalidatePath("/");
}

export async function decrementProductQuantityAction(id: number) {
  await decrementProductQuantity(id);
  revalidatePath("/checkout");
}

export async function removeProductFromCartAction(id: number) {
  await removeProductFromCart(id);
  revalidatePath("/checkout");
}

export async function clearCartAction() {
  await clearCart();
  revalidatePath("/checkout");
}
