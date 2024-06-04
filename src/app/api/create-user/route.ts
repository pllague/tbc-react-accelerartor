import { sql } from "@vercel/postgres";
import { NextRequest } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export async function GET(_: NextRequest) {
  try {
    const session = await getSession();

    if (session?.user) {
      const { sub, name ,email, picture } = session.user;

      const user = await sql`SELECT * FROM users WHERE sub = ${sub}`;

      if (!user.rows.length){
        await sql`INSERT INTO users (name, email, sub, image_url) VALUES ( ${name}, ${email}, ${sub}, ${picture});`;
      }
    }
  } catch (error) {
    return redirect("/api/auth/logout");
  }
  return redirect("/");
}