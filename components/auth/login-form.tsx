"use client";

import { useForm } from "react-hook-form";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { AuthCard } from "./auth-card";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/types/login-schema";
import * as z from "zod";
import { Input } from "../ui/input";
import Link from "next/link";
import { emailSignIn } from "@/server/actions/email-signin";
import { useAction } from "next-safe-action/hooks";
import { cn } from "@/lib/utils";

export const LoginForm = () => {
	const form = useForm({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const { execute, status } = useAction(emailSignIn, {});

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		execute(values);
	};
	return (
		<AuthCard
			cardTitle="Welcome back"
			backButtonHref="/auth/register"
			backButtonLabel="Create a new account"
			showSocials
		>
			<div>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="xoboidd@gmail.com"
												type="email"
												autoComplete="email"
											/>
										</FormControl>
										<FormDescription />
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="*********"
												type="password"
												autoComplete="current-password"
											/>
										</FormControl>
										<FormDescription />
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button size={"sm"} variant={"link"}>
								<Link href="/auth/reset">
									Forgot your password
								</Link>
							</Button>
						</div>
						<Button
							type="submit"
							className={cn(
								"w-full my-2",
								status === "executing" ? "animate-pulse" : ""
							)}
						>
							<span>{"Login"}</span>
						</Button>
					</form>
				</Form>
			</div>
		</AuthCard>
	);
};
