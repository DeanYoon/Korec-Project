import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const query = sql`SELECT * FROM login WHERE user_id = ${data.id} AND password = ${data.password}`;

  try {
    const user = await query;

    if (user.rows.length > 0) {
      return NextResponse.json({ status: 200, user: user.rows[0].username });
    } else {
      return NextResponse.json("User does not exists", { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
