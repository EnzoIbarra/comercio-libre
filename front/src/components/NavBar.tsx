'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import {
	ShoppingCartIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function NavBar() {
	const { userData, logout } = useAuth();
	const router = useRouter();

	const getCartCount = () => {
		if (typeof window === 'undefined') return 0;
		const cart = JSON.parse(localStorage.getItem('cart') || '[]');
		return Array.isArray(cart) ? cart.length : 0;
	};

	const [cartCount, setCartCount] = useState(getCartCount());

	useEffect(() => {
		const onStorage = (e: StorageEvent) => {
			if (e.key === 'cart') setCartCount(getCartCount());
		};
		const onCartUpdated = () => setCartCount(getCartCount());
		window.addEventListener('storage', onStorage);
		window.addEventListener('cart-updated', onCartUpdated);
		return () => {
			window.removeEventListener('storage', onStorage);
			window.removeEventListener('cart-updated', onCartUpdated);
		};
	}, []);

	const handleCartClick = () => {
		if (userData) router.push('/cart');
	};

	return (
		<nav className='absolute top-0 left-0 z-50 w-full bg-green-700/95'>
			<div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2 space-y-2 md:space-y-0'>
				<Link href='/'>
					<div className='flex items-center justify-between space-x-2 cursor-pointer'>
						<div className='w-22 h-13 -ml-24'>
							<Image
								src='/logo4.png'
								alt='Logo Comercio Libre'
								width={130}
								height={130}
								className='w-180 h-22'
							/>
						</div>
						<span className='text-xl font-semibold text-white'>
							Comercio Libre
						</span>
					</div>
				</Link>

				<div className='w-full md:flex-1 md:mx-6'>
					<div className='relative w-full'>
						<input
							type='text'
							placeholder='Buscar productos...'
							className='w-full pl-10 pr-4 py-2 border border-green-400 bg-gray-50 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 transition'
						/>
						<MagnifyingGlassIcon className='w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2' />
					</div>
				</div>

				<div className='flex items-center space-x-4 -mr-5'>
					<button
						onClick={handleCartClick}
						className={`relative p-4 rounded-full focus:outline-none ${
							userData ? 'text-gray-600' : 'text-gray-400 cursor-not-allowed'
						}`}
						title={
							userData
								? 'Ver carrito'
								: 'Debes iniciar sesión para ver el carrito'
						}
					>
						<ShoppingCartIcon className='w-6 h-6 text-white' />
						{userData && cartCount > 0 && (
							<span className='absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full'>
								{cartCount}
							</span>
						)}
					</button>

					{userData ? (
						<div className='flex items-center space-x-3 -mr-18'>
							<button
								onClick={() => router.push('/dashboard')}
								className='flex items-center space-x-1 px-4 py-1 text-white rounded-full hover:bg-green-500 focus:outline-none'
							>
								<span className='text-sm font-medium'>Mi Cuenta</span>
							</button>
							<button
								onClick={logout}
								className='px-2 py-0 text-white rounded-full hover:bg-red-600 focus:outline-none -mr-4'
							>
								Cerrar Sesión
							</button>
						</div>
					) : (
						<button
							onClick={() => router.push('/login')}
							className='px-4 py-1 bg-green-400 text-white rounded-full hover:bg-green-500 focus:outline-none'
						>
							Iniciar Sesión
						</button>
					)}
				</div>
			</div>

			<div className='bg-green-700/95 text-white border-green-300 shadow-md z-50'>
				<div className='max-w-7xl mx-auto flex flex-wrap justify-center md:justify-around space-x-2 md:space-x-8 px-4 py-2 overflow-x-auto'>
					{[
						{ name: 'Electrónica', href: '/categories/electronica' },
						{ name: 'Ropa', href: '/categories/ropa' },
						{ name: 'Hogar', href: '/categories/hogar' },
						{ name: 'Deportes', href: '/categories/deportes' },
						{ name: 'Juguetes', href: '/categories/juguetes' },
						{ name: 'Libros', href: '/categories/libros' },
					].map((cat) => (
						<Link key={cat.name} href={cat.href}>
							<span className='px-3 py-1 text-white hover:shadow-lg rounded-full hover:bg-green-800 transition-transform duration-300 hover:scale-105 whitespace-nowrap cursor-pointer'>
								{cat.name}
							</span>
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}
