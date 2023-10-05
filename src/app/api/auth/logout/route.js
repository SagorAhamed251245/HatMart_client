import { NextResponse } from "next/server";

export const POST = async (request) => {
  // Create a new NextResponse object
  const res = new NextResponse(
    JSON.stringify({
      message: "Logout successfully",
    })
  );

  // Set the `jwt-token` cookie to an empty value, with an expiration date in the past
  res.cookies.set("jwt-token", "", {
    expires: new Date(Date.now() - 1000),
  });

  // Return the NextResponse object
  return res;
};
