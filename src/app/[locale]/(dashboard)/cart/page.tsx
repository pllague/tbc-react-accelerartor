import { BASE_URL } from "../../../../constants";
import { cookies } from "next/headers";


// this page was created for testing purposes, we can delete it then or update it.
const fetchData = async () => {
  const res = await fetch(`${BASE_URL}/api/carts/get-cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cookie": `uid=${JSON.parse(cookies().get("auth")?.value!).id};`
    },
  });

  const json = await res.json();

  return json;
}

export default async function Cart() {
  const data = await fetchData();
  console.log(data) // returns data what we need.
  return (
    <div>page</div>
  )
}

