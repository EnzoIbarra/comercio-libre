'use client';
import { useAuth } from '@/context/AuthContext';
import { createOrder } from '@/helpers/orders.helper';
import { IProducts } from '@/types/IProducts';
import { useEffect, useState } from 'react';

const CartView: React.FC = () => {
	const { userData } = useAuth();
	const [cart, setCart] = useState<IProducts[]>([]);
	const [total, setTotal] = useState<number>(0);
	const [message, setMessage] = useState<string>('');

	useEffect(() => {
		const stored: IProducts[] = JSON.parse(
			localStorage.getItem('cart') || '[]'
		);
		window.dispatchEvent(new Event('cart-updated'));

		setCart(stored);
		setTotal(stored.reduce((sum, p) => sum + p.price, 0));
	}, []);

	const removeFromCart = (id: number) => {
		setCart((prev) => {
			const idx = prev.findIndex((p) => p.id === id);
			if (idx === -1) return prev;
			const next = [...prev];
			next.splice(idx, 1);
			localStorage.setItem('cart', JSON.stringify(next));
			setTotal(next.reduce((sum, p) => sum + p.price, 0));
			return next;
		});
	};

	const handleCheckout = async () => {
		if (!userData?.token) {
			setMessage('Debes iniciar sesión para comprar.');
			return;
		}

		const ids = cart.map((p) => p.id);
		await createOrder(ids, userData.token);

		const history = JSON.parse(localStorage.getItem('orders') || '[]');
		const orderData = {
			id: Date.now(),
			date: new Date().toISOString(),
			status: 'approved',
			products: cart,
		};
		localStorage.setItem('orders', JSON.stringify([...history, orderData]));

		setCart([]);
		setTotal(0);
		localStorage.setItem('cart', '[]');
		window.dispatchEvent(new Event('cart-updated'));
		setMessage('Compra realizada con éxito 🎉');
	};

	return (
		<div className='container mx-auto p-6 space-y-6'>
			<h2 className='text-2xl font-bold'>Carrito de compras</h2>

			{message && <p className='text-green-600 font-medium'>{message}</p>}

			{cart.length ? (
				<ul className='space-y-4'>
					{cart.map((product, idx) => (
						<li
							key={`${product.id}-${idx}`}
							className='flex items-center bg-white p-4 rounded shadow'
						>
							<img
								src={product.image}
								alt={product.name}
								className='w-20 h-20 object-cover rounded mr-4'
							/>
							<div className='flex-1'>
								<p className='font-semibold'>{product.name}</p>
								<p className='text-gray-600'>${product.price.toFixed(2)}</p>
							</div>
							<button
								onClick={() => removeFromCart(product.id)}
								className='text-red-500 hover:underline'
							>
								Eliminar
							</button>
						</li>
					))}
				</ul>
			) : (
				<p>Carrito vacío</p>
			)}

			<div className='flex items-center justify-between pt-4 border-t'>
				<span className='text-xl font-semibold'>
					Total: ${total.toFixed(2)}
				</span>
				<button
					onClick={handleCheckout}
					className={`px-4 py-2 rounded-full transition 
						${
							cart.length
								? 'bg-green-400 hover:bg-green-500 cursor-pointer text-white'
								: 'bg-green-200 cursor-not-allowed text-gray-500'
						}`}
					disabled={!cart.length}
				>
					Confirmar compra
				</button>
			</div>
		</div>
	);
};

export default CartView;
