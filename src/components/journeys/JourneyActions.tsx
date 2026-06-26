"use client";

import { useRouter } from "next/navigation";
import { Leaf } from "lucide-react";

import CardSection from "@/components/ui/CardSection";

export default function JourneyActions() {
    const router = useRouter();

    const leadGoals = [
        "Write Every Day",
        "Read More Books",
    ];

    return (
        <CardSection
            title={`Lead Goals (${leadGoals.length})`}
            actionText="View"
            onAction={() =>
                router.push("/journeys/lead-goals")
            }
        >
            <div className="space-y-3">
                {leadGoals.map((goal) => (
                    <div
                        key={goal}
                        className="
                        flex
                        items-center
                        gap-3
                        "
                    >
                        <Leaf
                            size={15}
                            className="text-[var(--primary)]"
                        />

                        <span
                            className="
                            text-sm
                            text-[var(--foreground)]
                            "
                        >
                            {goal}
                        </span>
                    </div>
                ))}
            </div>
        </CardSection>
    );
}