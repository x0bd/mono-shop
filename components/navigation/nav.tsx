import { auth } from "@/server/auth";
import { UserButton } from "./user-button";
import Link from "next/link";
import { Button } from "../ui/button";
import { LogInIcon } from "lucide-react";

// TODO Write the logo in japanese

export default async function Nav() {
	const session = await auth();

	return (
		<header className="py-8">
			<nav>
				<ul className="flex justify-between">
					<li>
						<Link className="text-4xl font-black" href={"/"}>
							もの
						</Link>
					</li>
					{!session ? (
						<li>
							<Button asChild>
								<Link className="flex gap-2" href="/auth/login">
									<LogInIcon size={16} />
									<span>Log In</span>
								</Link>
							</Button>
						</li>
					) : (
						<li>
							<UserButton
								expires={session?.expires ?? ""}
								user={session?.user}
							/>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}
