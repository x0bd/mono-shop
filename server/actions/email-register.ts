"use client";

import { RegisterSchema } from "@/types/register-schema";
import { createSafeActionClient } from "next-safe-action";
import bcrypt from "bcrypt";
import { db } from "..";
import { eq } from "drizzle-orm";
import { users } from "../schema";

const action = createSafeActionClient();

export const emailRegister = action
	.schema(RegisterSchema)
	.action(async ({ parsedInput: { email, name, password } }) => {
		const hashedPassword = await bcrypt.hash(password, 10);
		console.log(hashedPassword);
		const existingUser = await db.query.users.findFirst({
			where: eq(users.email, email),
		});

		// Check if email is already in db, and respond with in use, if not register user
		if (existingUser) {
			// if (!existingUser.emailVerified) {
			//     const verfificationToken =
			// }
			return { error: "Email already in use" };
		}
		return { success: "Yep!" };
	});
