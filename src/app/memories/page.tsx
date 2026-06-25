import AppShell from "@/components/layout/AppShell";
import PageHeader from "@/components/ui/PageHeader";

import MemoryList from "@/components/memories/MemoryList";

export default function MemoriesPage() {
    return (
        <AppShell>
            <PageHeader title="Memories" />

            <MemoryList />
        </AppShell>
    );
}