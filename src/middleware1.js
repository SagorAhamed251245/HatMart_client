import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {
  const { pathname } = request.nextUrl;
  const isPath = (path) => pathname.startsWith(path);
  try {
    let cookie = request.cookies.get("jwt-token")?.value;
    if (!cookie || !cookie.startsWith("Bearer")) {
      throw new Error("Invalid token");
    }
    const secret = new TextEncoder().encode(process.env.jwt_secret);
    await jwtVerify(cookie.split("Bearer ")[1], secret);
    if (isPath("/login") || isPath("/registration")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  } catch (error) {
    if (isPath("/login") || isPath("/registration")) {
      return NextResponse.next();
    }
    return NextResponse.redirect(
      new URL(`/login?redirectUrl=${pathname}`, request.url)
    );
  }
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/dashboard/myProfile/:path*",
    "/dashboard/:path*",
    "/payment/:path*",
    "/login/:path*",
    "/registration/:path*",
  ],
};
