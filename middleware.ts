import authStore from "@/stores/authStore";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const token = authStore(({ token }) => token);
  const pathname = request.nextUrl.pathname;

  if (!token && pathname.startsWith("/mypage")) {
    return NextResponse.redirect(new URL("/login"));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/mypage/:path*"],
};
