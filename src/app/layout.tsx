import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Next13NProgress } from 'nextjs13-progress';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next.js 14 Data Fetching Examples',
	description: 'Next.js 14 Data Fetching Examples',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex flex-col min-h-screen bg-base-300 text-base-content">
					{children}
				</div>
				<Next13NProgress color="#29D" />
			</body>
		</html>
	);
}
