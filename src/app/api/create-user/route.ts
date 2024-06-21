import { sql } from "@vercel/postgres";
import { NextRequest } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export const revalidate = 0;

export async function GET(_: NextRequest) {
  try {
    const session = await getSession();

    if (session?.user) {
      const { sub, name, email, picture, role } = session.user;
      const isAdmin = Array.isArray(role) && role.includes("Admin");

      const user = await sql`SELECT * FROM users WHERE sub = ${sub}`;

      if (!user.rows.length) {
        await sql`INSERT INTO users (name, email, sub, image_url, role) VALUES ( ${name}, ${email}, ${sub}, ${picture}, ${
          isAdmin ? "Admin" : "User"
        });`;
      }
    }
  } catch (error) {
    return redirect("/api/auth/logout");
  }
  return redirect("/");
}
