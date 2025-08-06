import { getProductsDB } from '@/helpers/products.helpers';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

interface Props {
	category: string;
}

export default async function Category({ category }: Props) {
	const all = await getProductsDB();

	const categoryMap: Record<number, string> = {
		1: 'electronica',
		2: 'electronica',
		3: 'electronica',
		4: 'electronica',
		5: 'electronica',
		6: 'electronica',
	};

	const filtered = all.filter(
		(p) => categoryMap[p.categoryId]?.toLowerCase() === category.toLowerCase()
	);

	if (!filtered.length) {
		return (
			<h2 className='text-center text-xl mt-20'>
				No hay productos en {category}
			</h2>
		);
	}

	return (
		<section className='py-10 bg-gray-200/85'>
			<div className='mx-auto max-w-6xl px-6'>
				<h2 className='text-3xl font-bold capitalize mb-6'>{category}</h2>
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{filtered.map((product) => (
						<Link href={`/products/${product.id}`} key={product.id}>
							<ProductCard product={product} />
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
