import {
    CheckCircle2,
    Circle,
} from "lucide-react";

export default function JourneyMilestones() {
    return (
        <div
            className="
            rounded-3xl
            border
            border-[#E8E1D7]
            p-5
            "
        >
            <h2
                className="
                text-base
                font-semibold
                text-[#111827]
                mb-5
                "
            >
                Journey Milestones
            </h2>

            <div className="space-y-4">
                <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                >
                    <CheckCircle2
                        size={18}
                        color="#2F7A59"
                    />

                    <span className="text-sm">
                        Started Journey
                    </span>
                </div>

                <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                >
                    <div
                        className="
                        h-3
                        w-3
                        rounded-full
                        bg-[#0E5A64]
                        "
                    />

                    <span className="text-sm">
                        Building Consistency
                    </span>
                </div>

                <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                >
                    <Circle
                        size={18}
                        color="#9CA3AF"
                    />

                    <span className="text-sm">
                        Mastery
                    </span>
                </div>
            </div>
        </div>
    );
}