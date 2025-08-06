import { IProducts } from '@/types/IProducts';

export function addToCart(product: IProducts) {
	const raw = localStorage.getItem('cart') || '[]';
	const cart: IProducts[] = JSON.parse(raw);
	cart.push(product);
	localStorage.setItem('cart', JSON.stringify(cart));
	window.dispatchEvent(new Event('cart-updated'));
}
