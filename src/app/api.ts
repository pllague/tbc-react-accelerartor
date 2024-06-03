import { BASE_URL } from "../constants";
import { getSession } from "@auth0/nextjs-auth0";

export async function getUsers() {
  const response = await fetch(BASE_URL + "/api/get-users");
  const { users } = await response.json();
  return users.rows;
}

export async function createUser(name: string, email: string, age: string) {
  return await fetch(BASE_URL + "/api/create-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
}

export async function deleteUser(id: number) {
  "use server";
  await fetch(`${BASE_URL}/api/delete-user/${id}`, {
    method: "DELETE",
  });
}

export async function updateUser(
  id: string,
  name: string,
  email: string,
  age: string
) {
  return await fetch(BASE_URL + "/api/edit-user", {
    method: "PUT",
    body: JSON.stringify({ id, name, email, age }),
  });
}

export async function createCart(user_id: string, item_id: number) {
  return await fetch(`${BASE_URL}/api/create-cart`, {
    method: "POST",
    body: JSON.stringify({ uid: user_id, prod_id: item_id }),
  });
}

export async function getDetailedCart() {
  const session = await getSession();
  const userId = session?.user?.sub;
  const res = await fetch(`${BASE_URL}/api/get-detailed-cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Cookie: `uid=${JSON.parse(cookies().get(AUTH_COOKIE_KEY)?.value!).id};`,
      Cookie: `uid=${userId};`,
    },
  });

  const json = await res.json();

  return json;
}

export async function fetchDataFromApi<T>(
  url: string,
  options?: RequestInit | undefined
): Promise<T> {
  const res = await fetch(url, options);

  const json = await res.json();

  return json;
}
export async function getCart() {
  const session = await getSession();
  const userId = session?.user?.sub;
  const response = await fetch(BASE_URL + `/api/get-cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Cookie: `uid=${JSON.parse(cookies().get(AUTH_COOKIE_KEY)?.value!).id}`,
      Cookie: `uid=${userId};`,
    },
  });
  const carts = await response.json();
  return carts.cart.rows;
}

export async function addToCart(id: number) {
  const session = await getSession();
  const userId = session?.user?.sub;
  await fetch(`${BASE_URL}/api/add-to-cart`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // Cookie: `uid=${JSON.parse(cookies().get(AUTH_COOKIE_KEY)?.value!).id}`,
      Cookie: `uid=${userId};`,
    },
    body: JSON.stringify({ prod_id: id }),
  });
}

export async function decrementProductQuantity(id: number) {
  const session = await getSession();
  const userId = session?.user?.sub;
  await fetch(`${BASE_URL}/api/decrement-product-quantity`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // Cookie: `uid=${JSON.parse(cookies().get(AUTH_COOKIE_KEY)?.value!).id}`,
      Cookie: `uid=${userId};`,
    },
    body: JSON.stringify({ prod_id: id }),
  });
}

export async function removeProductFromCart(id: number) {
  const session = await getSession();
  const userId = session?.user?.sub;
  await fetch(`${BASE_URL}/api/remove-product-from-cart`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // Cookie: `uid=${JSON.parse(cookies().get(AUTH_COOKIE_KEY)?.value!).id}`,
      Cookie: `uid=${userId};`,
    },
    body: JSON.stringify({ prod_id: id }),
  });
}

export async function clearCart() {
  const session = await getSession();
  const userId = session?.user?.sub;
  await fetch(`${BASE_URL}/api/clear-cart`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // Cookie: `uid=${JSON.parse(cookies().get(AUTH_COOKIE_KEY)?.value!).id}`,
      Cookie: `uid=${userId};`,
    },
  });
}
