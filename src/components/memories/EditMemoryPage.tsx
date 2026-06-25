import SettingsHeader from "@/components/profile/SettingsHeader";
import MemoryForm from "./MemoryForm";
import DeleteMemory from "./DeleteMemory";

export default function EditMemoryPage() {
    return (
        <div className="space-y-6">
            <SettingsHeader title="Edit Memory" />

            <MemoryForm mode="edit" />

            <DeleteMemory />
        </div>
    );
}