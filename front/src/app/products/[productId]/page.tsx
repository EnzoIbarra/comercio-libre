import ProductDetail from '@/components/ProductDetail';
import { getProductByID } from '@/helpers/products.helpers';
import { notFound } from 'next/navigation';

interface Props {
	params: { productId: string };
}

export default async function Page({ params }: Props) {
	try {
		const productId = params.productId;
		const product = await getProductByID(productId);
		return <ProductDetail {...product} />;
	} catch {
		return notFound();
	}
}
