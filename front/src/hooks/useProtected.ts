'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useProtected() {
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			const from = window.location.pathname;
			router.replace(`/login?from=${encodeURIComponent(from)}`);
		}
	}, [router]);
}
