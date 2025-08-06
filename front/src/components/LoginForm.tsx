'use client';

import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validateLogin from '@/helpers/validateLogin';
import type { ILoginForm } from '@/types/login/ILoginForm';
import { login } from '@/helpers/auth.helper';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';

export const LoginForm: React.FC = () => {
	const router = useRouter();
	const params = useSearchParams();
	const { setUserData } = useAuth();
	const [errorMsg, setErrorMsg] = useState('');

	const initialValues: ILoginForm = { email: '', password: '' };

	return (
		<div className='flex items-center justify-center mt-1 -mb-7 bg-gray-50 pt-18 pb-52'>
			<Formik
				initialValues={initialValues}
				validate={validateLogin}
				onSubmit={async (values) => {
					try {
						setErrorMsg('');
						const { token, user } = await login(values);

						document.cookie = [
							`userSession=${token}`,
							'Path=/',
							`Max-Age=${7 * 24 * 60 * 60}`,
						].join('; ');

						setUserData({ token, user });

						const from = params.get('from') || '/';
						router.push(decodeURIComponent(from));
					} catch (err: unknown) {
						if (err instanceof Error) {
							setErrorMsg(err.message);
						} else {
							setErrorMsg('Error al iniciar sesión');
						}
					}
				}}
			>
				{({ isSubmitting, isValid, dirty }) => (
					<Form className='w-full max-w-md bg-white rounded-lg shadow-lg shadow-gray-500/50 p-6 inset-shadow-sm inset-shadow-gray-500/20'>
						<h2 className='text-2xl font-bold text-center mb-6'>
							Iniciar sesión
						</h2>

						{errorMsg && (
							<p className='text-red-600 text-center mb-4'>
								Email o contraseña incorrectos
							</p>
						)}

						<div className='mb-4 shadow-lg shadow-gray-400/50'>
							<label className='block text-gray-700 mb-1'>Email</label>
							<Field
								name='email'
								type='email'
								placeholder='example@mail.com'
								className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
							/>
							<ErrorMessage
								name='email'
								component='p'
								className='text-red-600 text-sm mt-1'
							/>
						</div>

						<div className='mb-6 shadow-lg shadow-gray-400/50'>
							<label className='block text-gray-700 mb-1'>Contraseña</label>
							<Field
								name='password'
								type='password'
								placeholder='*******'
								className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
							/>
							<ErrorMessage
								name='password'
								component='p'
								className='text-red-600 text-sm mt-1'
							/>
						</div>

						<button
							type='submit'
							disabled={isSubmitting || !isValid || !dirty}
							className='w-full bg-green-400 text-white py-2 rounded-full hover:bg-green-500 disabled:opacity-50 transition'
						>
							Iniciar sesión
						</button>

						<p className='text-center text-sm text-gray-600 mt-4'>
							¿No estás registrado?{' '}
							<Link href='/register' className='text-green-500 hover:underline'>
								Regístrate aquí
							</Link>
						</p>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default LoginForm;
