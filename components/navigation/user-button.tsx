"use client";

import { signOut } from "@/server/auth";
import { Session } from "next-auth";

export const UserButton = ({ user }: Session) => {
	return (
		<div>
			<h1>{user?.email}</h1>
			<button onClick={() => signOut()}>Sign Out</button>
		</div>
	);
};
