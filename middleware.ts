import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let loggedIn: any;
  if (typeof window !== "undefined") {
    loggedIn = localStorage.getItem("loggedInUser");
    console.log(loggedIn);
  }

  // if (request.nextUrl.pathname === "/") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
}
