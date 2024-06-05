import { auth } from "@/server/auth";
import { UserButton } from "./user-button";
import Link from "next/link";
import { Button } from "../ui/button";
import { LogInIcon } from "lucide-react";

export default async function Nav() {
	const session = await auth();

	return (
		<header className="py-4">
			<nav>
				<ul className="flex justify-between">
					<li>MONO</li>
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
