import { db } from "@/lib/db/db";
import { aiProjects } from "@/lib/db/schema";
import { getSession } from "@/lib/auth";
import { eq, asc } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const projects = await db.select().from(aiProjects).orderBy(asc(aiProjects.displayOrder));
        return NextResponse.json(projects.map(p => ({
            ...p,
            toolsUsed: JSON.parse(p.toolsUsed)
        })));
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const data = await request.json();
        const newProject = {
            ...data,
            toolsUsed: JSON.stringify(data.toolsUsed),
            displayOrder: data.displayOrder || 0
        };
        await db.insert(aiProjects).values(newProject);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const data = await request.json();
        const { id, ...updates } = data;

        const updateData: any = { ...updates };
        if (updates.toolsUsed) {
            updateData.toolsUsed = JSON.stringify(updates.toolsUsed);
        }

        await db.update(aiProjects).set(updateData).where(eq(aiProjects.id, id));
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

        await db.delete(aiProjects).where(eq(aiProjects.id, id));
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
    }
}
