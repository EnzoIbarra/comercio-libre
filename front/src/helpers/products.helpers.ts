import { IProducts } from '@/types/IProducts';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB(): Promise<IProducts[]> {
	try {
		const response = await fetch(`${BASE_URL}/products`);

		if (!response.ok) {
			throw new Error(`Error HTTP: ${response.status}`);
		}

		const products = await response.json();
		return products;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
		throw new Error('Error al obtener productos');
	}
}

export async function getProductByID(id: string): Promise<IProducts> {
	const products = await getProductsDB();
	const product = products.find((p) => p.id.toString() === id);
	if (!product) throw new Error('Producto no encontrado');
	return product;
}
