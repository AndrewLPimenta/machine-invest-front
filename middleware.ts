import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  const pathname = req.nextUrl.pathname;

  const paginasPrivadas = ["/conservador", "/moderado", "/arrojado"];

  if (paginasPrivadas.some((rota) => pathname.startsWith(rota)) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/conservador/:path*", "/moderado/:path*", "/arrojado/:path*"],
};
