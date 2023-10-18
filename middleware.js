// create next js middleware to check if token is in cookies
//
import Cookies from "js-cookie";
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");
  console.log(req.cookies);
  if (!token) {
    return NextResponse.rewrite(new URL("/admin/login", req.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/admin/:path*",
};
