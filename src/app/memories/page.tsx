import AppShell from "@/components/layout/AppShell";
import PageHeader from "@/components/ui/PageHeader";

import CategoryPills from "@/components/memories/CategoryPills";
import MemoryList from "@/components/memories/MemoryList";

import { Search, SlidersHorizontal } from "lucide-react";

export default function MemoriesPage() {
    return (
        <AppShell>
            <PageHeader title="Memories" />

            <CategoryPills />
            <MemoryList />
        </AppShell>
    );
}