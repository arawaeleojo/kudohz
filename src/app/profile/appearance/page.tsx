import AppShell from "@/components/layout/AppShell";
import SettingsHeader from "@/components/profile/SettingsHeader";
import AppearanceSettings from "@/components/profile/AppearanceSettings";

export default function AppearancePage() {
    return (
        <AppShell>
            <SettingsHeader title="Appearance" />

            <AppearanceSettings />
        </AppShell>
    );
}