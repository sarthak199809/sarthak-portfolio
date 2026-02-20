import { login } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        // Simple check against provided credentials
        if (email === "sarthak199809@gmail.com" && password === "Dear@12345") {
            const success = await login(email);
            if (success) {
                return NextResponse.json({ success: true });
            }
        }

        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
