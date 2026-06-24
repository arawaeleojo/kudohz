import AppShell from "@/components/layout/AppShell";
import SettingsHeader from "@/components/profile/SettingsHeader";
import HelpSupport from "@/components/profile/HelpSupport";

export default function HelpSupportPage() {
    return (
        <AppShell>
            <SettingsHeader title="Help & Support" />

            <HelpSupport />
        </AppShell>
    );
}