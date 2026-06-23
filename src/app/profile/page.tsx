import AppShell from "@/components/layout/AppShell";
import PageHeader from "@/components/ui/PageHeader";

import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import ActivityHeatmap from "@/components/profile/ActivityHeatmap";
import ProfileSettings from "@/components/profile/ProfileSettings";

export default function ProfilePage() {
    return (
        <AppShell>
            <PageHeader title="Profile" />

            <ProfileHeader />

            <ProfileStats />

            <ActivityHeatmap />

            <ProfileSettings />
        </AppShell>
    );
}