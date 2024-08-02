import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "@/components/navigation/nav";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

// Add Some Bit Of Japanese
export const metadata: Metadata = {
	title: "MONO",
	description: "Your Neo-Tokyo Shop",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"px-6 md:px-12 mx-auto max-w-5xl",
					`${inter.className}`
				)}
			>
				<Nav />
				{children}
			</body>
		</html>
	);
}
