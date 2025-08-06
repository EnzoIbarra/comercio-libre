'use client';

import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validateRegister from '@/helpers/validateRegister';
import type { IRegisterForm } from '@/types/register/IRegisterForm';
import { register } from '@/helpers/auth.helper';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const RegisterForm: React.FC = () => {
	const router = useRouter();
	const [errorMsg, setErrorMsg] = useState('');

	const initialValues: IRegisterForm = {
		name: '',
		email: '',
		password: '',
		address: '',
		phone: '',
	};

	return (
		<div className='flex items-center justify-center mt-1 bg-gray-50 pt-18 pb-10'>
			<Formik
				initialValues={initialValues}
				validate={validateRegister}
				onSubmit={async (values, { resetForm }) => {
					try {
						await register(values);
						resetForm();
						router.push('/login');
					} catch (err: unknown) {
						if (err instanceof Error) {
							setErrorMsg(err.message);
						} else {
							setErrorMsg('Ocurrió un error inesperado.');
						}
					}
				}}
			>
				{({ isSubmitting, isValid, dirty }) => (
					<Form className='w-full max-w-md bg-white rounded-lg shadow-lg p-6 inset-shadow-sm inset-shadow-gray-500/20 '>
						<h2 className='text-2xl font-bold text-center mb-6'>Registrarse</h2>
						{errorMsg && (
							<p className='text-red-600 text-center mb-4'>{errorMsg}</p>
						)}

						<div className='mb-4 '>
							<label className='block text-gray-700 mb-1'>Nombre</label>
							<Field
								name='name'
								type='text'
								className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
							/>
							<ErrorMessage
								name='name'
								component='p'
								className='text-red-600 text-sm mt-1'
							/>
						</div>

						<div className='mb-4'>
							<label className='block text-gray-700 mb-1'>Email</label>
							<Field
								name='email'
								type='email'
								className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
							/>
							<ErrorMessage
								name='email'
								component='p'
								className='text-red-600 text-sm mt-1'
							/>
						</div>

						<div className='mb-4'>
							<label className='block text-gray-700 mb-1'>Contraseña</label>
							<Field
								name='password'
								type='password'
								className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
							/>
							<ErrorMessage
								name='password'
								component='p'
								className='text-red-600 text-sm mt-1'
							/>
						</div>

						<div className='mb-4'>
							<label className='block text-gray-700 mb-1'>Dirección</label>
							<Field
								name='address'
								type='text'
								className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
							/>
							<ErrorMessage
								name='address'
								component='p'
								className='text-red-600 text-sm mt-1'
							/>
						</div>

						<div className='mb-6'>
							<label className='block text-gray-700 mb-1'>Teléfono</label>
							<Field
								name='phone'
								type='number'
								className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
							/>
							<ErrorMessage
								name='phone'
								component='p'
								className='text-red-600 text-sm mt-1'
							/>
						</div>

						<button
							type='submit'
							disabled={isSubmitting || !isValid || !dirty}
							className='w-full bg-green-400 text-white py-2 rounded-full hover:bg-green-500 disabled:opacity-50 transition'
						>
							Enviar
						</button>

						<p className='text-center text-sm text-gray-600 mt-4'>
							¿Ya tienes cuenta?{' '}
							<Link href='/login' className='text-green-500 hover:underline'>
								Inicia sesión aquí
							</Link>
						</p>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default RegisterForm;
