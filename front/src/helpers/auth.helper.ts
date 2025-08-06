import { ILoginForm } from '@/types/login/ILoginForm';
import { IRegisterForm } from '@/types/register/IRegisterForm';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: IRegisterForm) {
	try {
		const response = await fetch(`${BASE_URL}/users/register`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(userData),
		});

		if (!response.ok) {
			const error = await response.json();
			throw new Error(error.message || 'Fallo en el registro');
		}

		return response.json();
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message || 'Hubo un error al registrarse');
		}
		throw new Error('Hubo un error desconocido al registrarse');
	}
}

export async function login(userData: ILoginForm) {
	try {
		const response = await fetch(`${BASE_URL}/users/login`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(userData),
		});

		if (!response.ok) {
			const error = await response.json();
			throw new Error(error.message || 'Fallo en el login');
		}

		return response.json();
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message || 'Hubo un error al ingresar');
		}
		throw new Error('Hubo un error desconocido al ingresar');
	}
}
