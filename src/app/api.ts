import { BASE_URL } from "../constants";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../constants";

export async function getUsers() {
    const response = await fetch(BASE_URL + '/api/get-users');
    const { users } = await response.json();
    return users.rows;
}

export async function createUser(name: string, email: string, age: string) {
    return await fetch(BASE_URL + "/api/create-user", {
        method: 'POST',
        body: JSON.stringify({ name, email, age }),
    });
}

export async function deleteUser(id: number) {
    'use server';
    await fetch(`${BASE_URL}/api/delete-user/${id}`, {
        method: 'DELETE',
    });
}

export async function updateUser(id: string, name: string, email: string, age: string) {
    return await fetch(BASE_URL + "/api/edit-user", {
        method: 'PUT',
        body: JSON.stringify({ id, name, email, age }),
    });
}

export async function createCart(item_id: number, user_id: string) {
    return await fetch(`${BASE_URL}/api/create-cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `uid=${user_id};`,
        },
        body: JSON.stringify({ item_id })
    });
};

export async function getDetailedCart() {
    const res = await fetch(`${BASE_URL}/api/get-detailed-cart`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Cookie": `uid=${JSON.parse(cookies().get(AUTH_COOKIE_KEY)?.value!).id};`
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