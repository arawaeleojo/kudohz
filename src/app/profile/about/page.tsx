import AppShell from "@/components/layout/AppShell";
import SettingsHeader from "@/components/profile/SettingsHeader";
import AboutKudohz from "@/components/profile/AboutKudohz";

export default function AboutPage() {
    return (
        <AppShell>
            <SettingsHeader title="About Kudohz" />

            <AboutKudohz />
        </AppShell>
    );
}