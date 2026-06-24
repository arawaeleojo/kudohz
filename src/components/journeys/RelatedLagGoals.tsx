import { ChevronRight } from "lucide-react";

export default function RelatedLagGoals() {
    const lagGoals = [
        "Publish a Novel",
        "Start a Newsletter",
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
            <h2
                className="
                text-base
                font-semibold
                text-[#111827]
                mb-4
                "
            >
                Related Lag Goals
            </h2>

            <div className="space-y-4">
                {lagGoals.map((goal) => (
                    <div
                        key={goal}
                        className="
                        flex
                        items-center
                        justify-between
                        "
                    >
                        <span
                            className="
                            text-sm
                            text-[#374151]
                            "
                        >
                            {goal}
                        </span>

                        <ChevronRight
                            size={16}
                            color="#9CA3AF"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}