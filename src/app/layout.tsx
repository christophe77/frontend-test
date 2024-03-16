'use client';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import StoreProvider from './StoreProvider';
import theme from '../theme';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<StoreProvider>
					<AppRouterCacheProvider>
						<ThemeProvider theme={theme}>{children}</ThemeProvider>
					</AppRouterCacheProvider>
				</StoreProvider>
			</body>
		</html>
	);
}
