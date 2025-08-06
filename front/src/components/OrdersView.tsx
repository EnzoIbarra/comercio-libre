'use client';
import { useAuth } from '@/context/AuthContext';
import { getOrders } from '@/helpers/orders.helper';
import { IOrder } from '@/types/IOrder';
import { useEffect, useState } from 'react';

const OrdersView = () => {
	const { userData } = useAuth();
	const [orders, setOrders] = useState<IOrder[] | null>(null);

	useEffect(() => {
		if (!userData?.token) return;
		getOrders(userData.token).then((allOrders: IOrder[]) => {
			const myOrders = allOrders.filter(
				(o) => o.status === 'approved'
			);
			setOrders(myOrders);
		});
	}, [userData]);

	if (orders === null) return <p>Cargando órdenes…</p>;

	return (
		<div className='bg-white p-6 rounded shadow-lg inset-shadow-sm inset-shadow-gray-300'>
			<h2 className='text-xl font-bold mb-4'>Historial de Órdenes</h2>
			{orders.length > 0 ? (
				orders.map((order) => (
					<div key={order.id} className='mb-6 border-b pb-4'>
						<p className='text-sm text-gray-600'>
							Fecha: {new Date(order.date).toLocaleDateString()}
						</p>
						<p className='text-sm text-green-600 font-medium'>
							Estado: {order.status.toUpperCase()}
						</p>
						<div className='mt-2 space-y-1'>
							{order.products.map((p) => (
								<div key={p.id} className='text-gray-800'>
									• {p.name}
								</div>
							))}
						</div>
					</div>
				))
			) : (
				<p className='text-gray-500'>Historial de órdenes vacío.</p>
			)}
		</div>
	);
};

export default OrdersView;
