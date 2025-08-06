'use client';
import Link from 'next/link';
import type { ReactNode } from 'react';

type DashboardProps = {
	children: ReactNode;
};

export default function Dashboard({ children }: DashboardProps) {
	return (
		<div className='flex min-h-screen pt-16'>
			{' '}
			<aside className='w-64 bg-white shadow-md p-6'>
				<h2 className='text-xl font-bold mb-4'>Menú</h2>
				<nav className='space-y-2'>
					<Link
						href='/dashboard'
						className='block text-gray-700 hover:text-green-500'
					>
						Mi perfil
					</Link>
					<Link
						href='/dashboard/orders'
						className='block text-gray-700 hover:text-green-500'
					>
						Historial de órdenes
					</Link>
				</nav>
			</aside>
			<main className='flex-1 bg-gray-100 p-8'>{children}</main>
		</div>
	);
}
