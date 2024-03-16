'use client';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import StoreProvider from './StoreProvider';
import theme from '../theme';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const RootContainer = styled('div')(() => ({
	marginLeft: '15vh',
	marginRight: '15vh',
}));
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
						<ThemeProvider theme={theme}>
							<RootContainer>{children}</RootContainer>
						</ThemeProvider>
					</AppRouterCacheProvider>
				</StoreProvider>
			</body>
		</html>
	);
}
