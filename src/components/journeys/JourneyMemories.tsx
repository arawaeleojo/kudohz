import { ChevronRight } from "lucide-react";

export default function JourneyMemories() {
    const memories = [
        "Published first article",
        "Finished chapter draft",
        "Got positive feedback",
    ];

    return (
        <div
            className="
            rounded-3xl
            border
            border-[#E8E1D7]
            p-5
            "
        >
            <div
                className="
                flex
                items-center
                justify-between
                mb-4
                "
            >
                <h2
                    className="
                    text-base
                    font-semibold
                    text-[#111827]
                    "
                >
                    Recent Memories
                </h2>

                <ChevronRight
                    size={18}
                    color="#6B7280"
                />
            </div>

            <div className="space-y-3">
                {memories.map((memory) => (
                    <div
                        key={memory}
                        className="
                        text-sm
                        text-[#374151]
                        "
                    >
                        • {memory}
                    </div>
                ))}
            </div>
        </div>
    );
}