import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Verifica se está acessando páginas de perfil privadas
  const paginasPrivadas = ["/perfil/conservador", "/perfil/moderado", "/perfil/agressivo"];

  if (paginasPrivadas.some((rota) => pathname.startsWith(rota))) {
    // Para páginas privadas, redireciona para login se não estiver autenticado
    // O AuthProvider no cliente irá verificar o localStorage
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/perfil/:path*"],
};
