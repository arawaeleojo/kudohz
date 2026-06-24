import AppShell from "@/components/layout/AppShell";
import SettingsHeader from "@/components/profile/SettingsHeader";
import EditProfileForm from "@/components/profile/EditProfileForm";

export default function EditProfilePage() {
    return (
        <AppShell>
            <SettingsHeader title="Edit Profile" />

            <EditProfileForm />
        </AppShell>
    );
}