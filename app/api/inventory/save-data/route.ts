import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Insert the provided data into the log table
    const insertQuery = sql`
      INSERT INTO log (item_id, changed_column_name, changed_column_data, user_id)
      VALUES (${data.item_id}, ${data.changed_column_name}, ${data.changed_column_data}, ${data.user_id})
    `;

    await insertQuery;

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
