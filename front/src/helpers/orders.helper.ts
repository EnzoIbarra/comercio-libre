const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(products: number[], token: string) {
	try {
		const response = await fetch(`${BASE_URL}/orders`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify({
				products,
			}),
		});
		if (response.ok) {
			alert('Compra exitosa');
			return response.json();
		}
	} catch (error: unknown) {
		alert(error);
		throw new Error();
	}
}

export async function getOrders(token: string) {
	try {
		const response = await fetch(`${BASE_URL}/users/orders`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				Authorization: token,
			},
		});
		return response.json();
	} catch (error: unknown) {
		const errorMsg = error instanceof Error ? error.message : String(error)
		alert(errorMsg)
		throw new Error(errorMsg);
	}
}
