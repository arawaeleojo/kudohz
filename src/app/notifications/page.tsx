import AppShell from "@/components/layout/AppShell";
import SettingsHeader from "@/components/profile/SettingsHeader";
import NotificationsList from "@/components/notifications/NotificationsList";

export default function NotificationsPage() {
    return (
        <AppShell>
            <SettingsHeader title="Notifications" />

            <NotificationsList />
        </AppShell>
    );
}