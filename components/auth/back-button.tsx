"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export const BackButton = ({
	href,
	label,
}: {
	href: string;
	label: string;
}) => {
	return (
		<Button variant="default" className="font-medium">
			<Link href={href} aria-label={label}>
				{label}
			</Link>
		</Button>
	);
};
