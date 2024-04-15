import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`
      CREATE TABLE Inventory (
        Id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        max_num INT,
        min_num INT,
        curr_num INT
      );
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
