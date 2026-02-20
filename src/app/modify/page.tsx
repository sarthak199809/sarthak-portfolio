import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import CMSDashboard from "@/components/CMSDashboard";

export default async function ModifyPage() {
    const session = await getSession();
    if (!session) {
        redirect("/");
    }

    return (
        <main className="min-h-screen bg-background text-foreground p-8 md:p-24 overflow-x-hidden">
            <CMSDashboard />
        </main>
    );
}
