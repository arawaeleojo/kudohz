"use client";

import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function JourneyActions() {
    const router = useRouter();

    const leadGoals = [
        "Write Every Day",
        "Read More Books",
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
            <button
                onClick={() =>
                    router.push(
                        "/journeys/lead-goals"
                    )
                }
                className="
                w-full
                flex
                items-center
                justify-between
                mb-4
                text-left
                "
            >
                <h2
                    className="
                    text-base
                    font-semibold
                    text-[#111827]
                    "
                >
                    Lead Goals (2)
                </h2>

                <ChevronRight
                    size={18}
                    color="#6B7280"
                />
            </button>

            <div className="space-y-3">
                {leadGoals.map((goal) => (
                    <div
                        key={goal}
                        className="
                        text-sm
                        text-[#374151]
                        "
                    >
                        • {goal}
                    </div>
                ))}
            </div>
        </div>
    );
}