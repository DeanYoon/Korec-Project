import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Drop the Inventory table if it exists
    await sql`
      DROP TABLE IF EXISTS Pets;
    `;

    return NextResponse.json(
      { message: "Inventory table dropped successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
