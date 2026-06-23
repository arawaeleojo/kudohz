import AppShell from "@/components/layout/AppShell";
import PageHeader from "@/components/ui/PageHeader";

import JourneyTabs from "@/components/journeys/JourneyTabs";
import JourneyList from "@/components/journeys/JourneyList";

export default function JourneysPage() {
    return (
        <AppShell>
            <PageHeader title="Journeys" />

            <JourneyTabs />

            <JourneyList />
        </AppShell>
    );
}