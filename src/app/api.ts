import { BASE_URL } from "../constants";

export async function getUsers(){
    const response = await fetch(BASE_URL + '/api/get-users');
    const {users} = await response.json();
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