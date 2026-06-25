import MemoryDetailsHeader from "./MemoryDetailsHeader";
import MemoryHero from "./MemoryHero";
import MemoryReflection from "./MemoryReflection";
import DeleteMemory from "./DeleteMemory";

export default function MemoryDetailsPage() {
    return (
        <div className="space-y-6">
            <MemoryDetailsHeader />

            <MemoryHero />

            <MemoryReflection />

            <DeleteMemory />
        </div>
    );
}