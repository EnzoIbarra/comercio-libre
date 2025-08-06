import Category from '@/components/Category';

interface Props {
	params: { category: string };
}

export default function CategoryPage({ params }: Props) {
	return <Category category={params.category} />;
}


// preguntar si puedo modificar la entity product del back