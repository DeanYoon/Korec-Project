import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log(data);
  //   const query = sql`SELECT * FROM inventory;`;
  try {
    // Fetch all data from the Inventory table
    // const inventoryData = await query;

    // Return the fetched data
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
