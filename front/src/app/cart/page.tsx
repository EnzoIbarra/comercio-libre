'use client'
import Cart from '@/components/Cart';
// import { useProtected } from '@/hooks/useProtected';

export default function CartView() {
	// useProtected();
	return (
		<section className='p-8 min-h-screen bg-gray-100'>
			<h1 className='text-2xl font-bold mb-6 text-center'>
				Carrito de Compras
			</h1>
			<Cart />
		</section>
	);
}
