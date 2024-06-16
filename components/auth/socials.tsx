"use client";

// add React Icons

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { GithubIcon } from "lucide-react";

export default function Socials() {
	return (
		<div className="flex flex-col items-center w-full gap-4">
			<Button
				variant={"outline"}
				className="flex gap-4 w-full"
				onClick={() =>
					signIn("google", { redirect: false, callbackUrl: "/" })
				}
			>
				<p>Sign in with Google</p>
				<GithubIcon className="w-5 h-5" />
			</Button>
			<Button
				variant={"outline"}
				className="flex gap-4 w-full"
				onClick={() =>
					signIn("github", { redirect: false, callbackUrl: "/" })
				}
			>
				<p>Sign in with GitHub</p>
				<GithubIcon className="w-5 h-5" />
			</Button>
		</div>
	);
}
