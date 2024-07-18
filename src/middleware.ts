import authStore from "@/stores/authStore";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const { cookies } = request;
  const refreshToken = cookies.get("refreshToken");

  if (!refreshToken && pathname.startsWith("/mypage")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/mypage/:path*"],
};
