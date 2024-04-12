import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await sql`
      INSERT INTO Inventory (name, max_num, min_num, curr_num)
      VALUES 
        ('Shampoo', 20, 5, 15),
        ('Conditioner', 15, 3, 12),
        ('Hair Gel', 30, 10, 25),
        ('Hair Spray', 25, 5, 20),
        ('Hair Oil', 10, 2, 8);
    `;

    return NextResponse.json(
      { message: "Data inserted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
