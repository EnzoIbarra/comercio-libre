import { IProducts } from '@/types/IProducts';

const productsToPreLoad: IProducts[] = [
	{
		id: 1,
		name: 'iPhone 16',
		price: 999,
		description:
			'Experience power and elegance with the iPhone 16: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!',
		image:
			'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NlcvVjg4Q2h4WWRjcFAyYlBrM0N1bGlCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXZka3Q2dVFYV2lxTm4wNXBJcGZoM1Rqb3p6Q2ZyUTlqTERzaHFUOVhnZGR3&traceId=1',
		categoryId: 1,
		stock: 10,
		categoryName: 'electrónica',
	},
	{
		id: 2,
		name: 'MacBook Air',
		price: 1199,
		description:
			'Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.',
		image:
			'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-skyblue-select-202503?wid=904&hei=840&fmt=jpeg&qlt=90&.v=M2RyY09CWXlTQUp1KzEveHR6VXNxcTQ1bzN1SitYTU83Mm9wbk1xa1lWNC9UNzNvY2N5NXJTTDQ2YkVYYmVXakJkRlpCNVhYU3AwTldRQldlSnpRa0lIV0Fmdk9rUlVsZ3hnNXZ3K3lEVlk',
		categoryId: 2,
		stock: 10,
		categoryName: 'electrónica',
	},
	{
		id: 3,
		name: 'iPad Air',
		price: 799,
		description:
			'Unleash your creativity and productivity with the iPad Air: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Air the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.',
		image:
			'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-model-unselect-gallery-1-202405?wid=5120&hei=2880&fmt=webp&qlt=70&.v=azZtTlRzREZ3NzhWaHRDQW5YeUV0UEs0TkxxOFYxN2dtSHJMdW5sNDFVK3MxV2hYTmJkSS9ZdDBsUEkxd0lnTE9UVDVQbVhkcDIxQlRzeDZXVVpQSzkyUzNxNUJkYUtvMmZUbWtpbCtIZE84amtPUS9xbkZadzF0WklDMm5nNTU&traceId=1',
		categoryId: 3,
		stock: 10,
		categoryName: 'electrónica',
	},
	{
		id: 4,
		name: 'Apple Watch Series 10',
		price: 399,
		description:
			'Stay connected and healthy with the Apple Watch Series 10: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 10.',
		image:
			'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/s10-case-unselect-gallery-1-202503?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=T1poMzZuRzBxQ1RzQmhMUHprUE5LZHlVRllKam5abHNZRGludXlMbytKNjZqY1lkK0tzZFpEVlpBSXpHb1VXNVBPMVJocHRGWWdEaGFBbE5iRklMb1hPYW04cW1YR2l1R0RzLzYxenhFZTlwZDRjSG44dlRjQnB4RFJ4d3IvN0o',
		categoryId: 4,
		stock: 10,
		categoryName: 'electrónica',
	},
	{
		id: 5,
		name: 'AirPods Pro 2',
		price: 249,
		description:
			'Immerse yourself in sound with the AirPods Pro 2: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro 2 the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.',
		image:
			'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=WTk1dTl5UTBnZXdKN2tua2pFb1hvQ3hmVXd6RnorM2pzUlRIKzNkUEN0U2VDYXovZDMyN1dXU211bjZoVlVUcWJGcXNRQnFCV0w3WVRjTExvdm1ic1dyYTFZWlpPczBocnFKR3FYSlo5L1FXZEdHNUFPR0hYUU12cjI0VlFzM1A',
		categoryId: 5,
		stock: 10,
		categoryName: 'electrónica',
	},
	{
		id: 6,
		name: 'HomePod mini',
		price: 99,
		description:
			'Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.',
		image:
			'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/homepod-mini-select-202210?wid=1080&hei=880&fmt=jpeg&qlt=90&.v=K2c3bEwyaWVDeDZkdHpLbHkwcGVSam9RVGpuTmx0T1h4bDIxVHQ5RDRIRkJPeDF2ZVVaSE5jWEZxb1JBMHNSQkJkRlpCNVhYU3AwTldRQldlSnpRa0NKOUJGbUVtUkw5S2dEY1BnYXVWR2c',
		categoryId: 6,
		stock: 10,
		categoryName: 'electrónica',
	},
];

export default productsToPreLoad;
