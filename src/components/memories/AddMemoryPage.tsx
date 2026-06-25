import SettingsHeader from "@/components/profile/SettingsHeader";
import MemoryForm from "./MemoryForm";

export default function AddMemoryPage() {
    return (
        <div className="space-y-6">
            <SettingsHeader title="Add Memory" />

            <MemoryForm mode="create" />
        </div>
    );
}