'use client';

import { IProducts } from '@/types/IProducts';


interface Props {
	product: IProducts;
}

export default function ProductCard({ product }: Props) {
	return (
		<article className='rounded-xl bg-zinc-100 inset-shadow-sm inset-shadow-gray-400/20 p-3 shadow-lg shadow-gray-400/50 hover:shadow-xl hover:transform hover:scale-105 duration-300'>
			<div className='relative flex items-end overflow-hidden rounded-xl'>
				<img
					src={product.image}
					alt={product.name}
					className='w-full h-48 object-cover'
				/>
				<div className='absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md'>
					<span className='ml-1 text-sm text-slate-400'>
						{product.stock} in stock
					</span>
				</div>
			</div>
			<div className='mt-1 p-2'>
				<h2 className='text-slate-700'>{product.name}</h2>
				<p className='mt-1 text-sm text-slate-400'>${product.price}</p>
				<div className='mt-3 flex items-center justify-between'></div>
			</div>
		</article>
	);
}
