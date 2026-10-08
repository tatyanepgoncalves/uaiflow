import { type NextRequest, NextResponse, type ProxyConfig } from 'next/server'
import { COOKIE_NAME } from './lib/axios'

// MAPEAMENTO DIÂMICO DE ROTAS PÚBLICAS
const publicRoutes = [
  {
    path: '/',
    whenAuthenticated: 'redirect',
  },
  {
    path: '/cadastrar',
    whenAuthenticated: 'redirect',
  },
  {
    path: '/entrar',
    whenAuthenticated: 'redirect',
  },
] as const

// REDIRECIONA QUANDO NÃO TIVER AUTENTICADO
const REDIRECT_WHEN_NOT_AUTHENTICATED = '/'

export function proxy(request: NextRequest) {
  const { nextUrl } = request
  const { pathname } = nextUrl

  // BUSCA SE A ROTA ATUAL É PÚBLICA
  const publicRoute = publicRoutes.find((route) => route.path === pathname)

  // Verifica a existência do token (use o mesmo COOKIE_NAME do seu app)
  const authToken = request.cookies.get(COOKIE_NAME)?.value

  // Caso 1: Usuário NÃO está autenticado e acessa uma Rota Pública -> Permite o acesso
  if (!authToken && publicRoute) {
    return NextResponse.next()
  }

  // Caso 2: Usuário NÃO está autenticado e tenta acessar uma Rota Privada -> Redireciona para a home (/)
  if (!(authToken || publicRoute)) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED
    return NextResponse.redirect(redirectUrl)
  }

  // Caso 3: Usuário ESTÁ autenticado e tenta acessar o Login (/) ou Cadastro -> Redireciona para o /dashboard
  if (authToken && publicRoute?.whenAuthenticated === 'redirect') {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/central-de-aprendizado'
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

// Melhoria no Matcher para ignorar a pasta 'public' (imagens, brasão, etc) e a API interna do Next.js
export const config: ProxyConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)s
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
