import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(
    request: Request
) {
    const body = await request.json();
    const {
        email,
        name,
        password
    } = body

    const hashedPassword = await bcrypt.hash(password, 12);

    // To store the data of a new user in the data-base
    const user = await prisma.user.create({
        data: {
            email, //User email
            name,  //User name
            hashedPassword //Hasded passwrod given by the user during register
        }
    });

    return NextResponse.json(user);
}