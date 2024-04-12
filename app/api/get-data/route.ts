import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Fetch all data from the Inventory table
    const inventoryData = await sql`
      SELECT * FROM Inventory;
    `;

    // Return the fetched data
    return NextResponse.json({ inventoryData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
