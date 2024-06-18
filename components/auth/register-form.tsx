"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
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
import { RegisterSchema } from "@/types/register-schema";
import * as z from "zod";
import { Input } from "../ui/input";
import Link from "next/link";
import { useAction } from "next-safe-action/hooks";
import { cn } from "@/lib/utils";
import { emailRegister } from "@/server/actions/email-register";

export const RegisterForm = () => {
	const form = useForm({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: "",
			password: "",
			name: "",
		},
	});

	const [error, setError] = useState("");
	const { execute, status } = useAction(emailRegister, {
		onSuccess(data) {
			if (data.data?.success) {
				console.log(data.data.success);
			}
		},
	});

	const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
		execute(values);
	};
	return (
		<AuthCard
			cardTitle="Create an Account"
			backButtonHref="/auth/login"
			backButtonLabel="Already have an account?"
			showSocials
		>
			<div>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="John Doe"
												type="text"
											/>
										</FormControl>
										<FormDescription />
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="johndoe@acme.com"
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
							Register
						</Button>
					</form>
				</Form>
			</div>
		</AuthCard>
	);
};
