'use client';

import { useAuth } from '@/context/AuthContext';

export default function ViewDashboard() {
	const { userData } = useAuth();

	return (
		<div className='bg-white p-6 rounded shadow-lg inset-shadow-sm inset-shadow-gray-300'>
			<h2 className='text-2xl font-bold mb-4'>Perfil de Usuario</h2>
			<p className='mb-4 text-gray-700'>
				Hola, <strong>{userData?.user.name}</strong> 👋
			</p>
			<ul className='space-y-2 text-gray-700'>
				<li>
					<strong>Email:</strong> {userData?.user.email}
				</li>
				<li>
					<strong>Dirección:</strong> {userData?.user.address}
				</li>
				<li>
					<strong>Teléfono:</strong> {userData?.user.phone}
				</li>
			</ul>
		</div>
	);
}
