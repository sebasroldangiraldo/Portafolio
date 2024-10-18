import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '../styles/globals.scss';

export const metadata: Metadata = {
	title: "Sebastián Roldán",
	description: "Software Developer Student Portfolio",
};

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '600']});

export default function RootLayout({children,} : Readonly<{ children: React.ReactNode;}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				{children}
			</body>
		</html>
	);
}
