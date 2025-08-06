import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => (
	<footer className='bg-gray-800 text-gray-200 py-6'>
		<div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8'>
			<div>
				<h3 className='text-2xl font-bold text-white mb-2'>Comercio Libre</h3>
				<p className='text-gray-400 text-sm'>
					Encuentra los mejores productos al mejor precio.
				</p>
			</div>

			<div className='flex justify-between'>
				<div>
					<h4 className='font-semibold mb-2'>Enlaces</h4>
					<ul className='space-y-1 text-sm'>
						<li>
							<Link href='/' className='hover:text-white transition'>
								Inicio
							</Link>
						</li>
						<li>
							<Link
								href='/categories/electronica'
								className='hover:text-white transition'
							>
								Electrónica
							</Link>
						</li>
						<li>
							<Link
								href='/categories/ropa'
								className='hover:text-white transition'
							>
								Ropa
							</Link>
						</li>
						<li>
							<Link
								href='/categories/hogar'
								className='hover:text-white transition'
							>
								Hogar
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h4 className='font-semibold mb-2'>Soporte</h4>
					<ul className='space-y-1 text-sm'>
						<li>
							<Link href='/help' className='hover:text-white transition'>
								Ayuda
							</Link>
						</li>
						<li>
							<Link href='/contact' className='hover:text-white transition'>
								Contacto
							</Link>
						</li>
						<li>
							<Link href='/terms' className='hover:text-white transition'>
								Términos
							</Link>
						</li>
						<li>
							<Link href='/privacy' className='hover:text-white transition'>
								Privacidad
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div>
				<h4 className='font-semibold mb-2'>Síguenos</h4>
				<div className='flex space-x-4'>
					<Link
						href='https://facebook.com'
						target='_blank'
						className='hover:text-white transition'
					>
						<Facebook className='w-6 h-6' />
					</Link>
					<Link
						href='https://twitter.com'
						target='_blank'
						className='hover:text-white transition'
					>
						<Twitter className='w-6 h-6' />
					</Link>
					<Link
						href='https://instagram.com'
						target='_blank'
						className='hover:text-white transition'
					>
						<Instagram className='w-6 h-6' />
					</Link>
					<Link
						href='https://linkedin.com'
						target='_blank'
						className='hover:text-white transition'
					>
						<Linkedin className='w-6 h-6' />
					</Link>
				</div>
			</div>
		</div>

		<div className='border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500'>
			© {new Date().getFullYear()} Comercio Libre. Todos los derechos
			reservados.
		</div>
	</footer>
);

export default Footer;
