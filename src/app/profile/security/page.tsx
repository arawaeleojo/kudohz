import AppShell from "@/components/layout/AppShell";
import SettingsHeader from "@/components/profile/SettingsHeader";
import SecuritySettings from "@/components/profile/SecuritySettings";

export default function SecurityPage() {
    return (
        <AppShell>
            <SettingsHeader title="Security" />

            <SecuritySettings />
        </AppShell>
    );
}