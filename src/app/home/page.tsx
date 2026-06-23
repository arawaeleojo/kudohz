import AppShell from "@/components/layout/AppShell";

import GreetingHeader from "@/components/home/GreetingHeader";
import IdentitiesSection from "@/components/home/IdentitiesSection";
import TodayActionsSection from "@/components/home/TodayActionsSection";

export default function HomePage() {
    return (
        <AppShell>
            <GreetingHeader />

            <IdentitiesSection />

            <TodayActionsSection />
        </AppShell>
    );
}