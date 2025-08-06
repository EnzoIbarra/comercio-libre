import { NextResponse, type NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;
	const token = req.cookies.get('userSession')?.value;

	const needsAuth =
		pathname === '/dashboard' ||
		pathname.startsWith('/dashboard/') ||
		pathname === '/cart';

	if (needsAuth && !token) {
		const url = req.nextUrl.clone();
		url.pathname = '/login';
		url.search = `?from=${encodeURIComponent(pathname)}`;
		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/dashboard/:path*', '/cart'],
};
