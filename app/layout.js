import { Inter } from 'next/font/google';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Navigation from '@/app/(components)/Navigation';

config.autoAddCss = false;
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Ticketing App',
	description: 'A full-stack ticketing web application built with NextJS, Tailwind CSS and MongoDB.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex flex-col h-screen max-h-screen">
					<Navigation />
					<div className="flex-grow overflow-y-auto bg-page text-default-text">{children}</div>
				</div>
			</body>
		</html>
	);
}
