'use client';
import { useAuth } from '@/context/AuthContext';
import { IProducts } from '@/types/IProducts';
import React from 'react';
import {addToCart} from '@/helpers/cart.helper';


const ProductDetail: React.FC<IProducts> = ({
	id,
	name,
	price,
	description,
	image,
	stock,
	categoryId,
}) => {
	const { userData } = useAuth();
	const handleAddToCart = () => {
		if (!userData?.token) {
			alert('Debes iniciar sesión para agregar productos al carrito');
			return;
		}
		addToCart({ id, name, price, description, image, stock, categoryId });
		alert('Producto agregado al carrito de compras');
	};

	return (
		<div className='container mx-auto px-4 py-12'>
			<article className='rounded-xl bg-white p-6 inset-shadow-sm inset-shadow-gray-500/20 shadow-lg shadow-gray-400/50'>
				<div className='md:flex md:gap-8'>
					<div className='md:w-1/2'>
						<img
							src={image}
							alt={name}
							className='w-full rounded-md object-cover shadow-lg'
						/>
					</div>
					<div className='md:w-1/2 mt-6 md:mt-0'>
						<h1 className=' text-black text-4xl font-bold mb-4'>{name}</h1>
						<p className='text-gray-600 mb-6'>{description}</p>
						<div className='flex items-start justify-between mb-4 flex-col'>
							<span className='text-2xl font-bold text-gray-900'>${price}</span>
							<span className='text-gray-700 bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md'>
								Stock: {stock}
							</span>
						</div>
						<button
							onClick={handleAddToCart}
							className='flex items-center space-x-2 bg-green-400 px-4 py-2 rounded-full text-white hover:bg-green-500 active:translate-y-1 active:scale-95 transition transform'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='h-5 w-5'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M12 4v16m8-8H4'
								/>
							</svg>
							<span>Añadir al carrito</span>
						</button>
					</div>
				</div>
			</article>
		</div>
	);
};

export default ProductDetail;
