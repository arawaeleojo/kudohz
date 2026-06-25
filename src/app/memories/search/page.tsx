import AppShell from "@/components/layout/AppShell";
import SearchMemoryPage from "@/components/memories/SearchMemoryPage";

export default function Page() {
    return (
        <AppShell>
            <SearchMemoryPage />
        </AppShell>
    );
}