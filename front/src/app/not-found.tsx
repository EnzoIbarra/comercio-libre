import Link from 'next/link';

export default function NotFound() {
	return (
		<div
			className='relative flex flex-col items-center justify-center h-screen p-4 -mt-20'
			style={{
				backgroundImage: 'url("/Vaca-mirandomar.jpeg")',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div className='absolute inset-0 bg-black opacity-50'></div>
			<div className='relative z-10 text-center text-white -mt-26'>
				<h2 className='flex-column text-4xl font-bold mb-4 drop-shadow-lg'>
					<p>Ups...</p>
					404 - Página no encontrada
				</h2>
				<p className='text-lg mb-6 drop-shadow mt-9'>
					Lo sentimos, la ruta que buscas no existe.
				</p>
				<Link
					href='/'
					className='px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-white font-medium transition'
				>
					Regresar al Menú
				</Link>
			</div>
		</div>
	);
}
