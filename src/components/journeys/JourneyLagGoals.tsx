"use client";

import { useRouter } from "next/navigation";
import { Leaf } from "lucide-react";

import CardSection from "@/components/ui/CardSection";

export default function JourneyLagGoals() {
    const router = useRouter();

    const lagGoals = [
        "Publish a Novel",
        "Start a Newsletter",
    ];

    return (
        <CardSection
            title={`Lag Goals (${lagGoals.length})`}
            actionText="View"
            onAction={() =>
                router.push("/journeys/lag-goals")
            }
        >
            <div className="space-y-3">
                {lagGoals.map((goal) => (
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