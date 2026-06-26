"use client";

import {
    CheckCircle2,
    Circle,
} from "lucide-react";

import CardSection from "@/components/ui/CardSection";

export default function JourneyMilestones() {
    return (
        <CardSection title="Journey Milestones">
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
                        className="text-[var(--success)]"
                    />

                    <span className="text-sm text-[var(--foreground)]">
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
                        bg-[var(--primary)]
                        "
                    />

                    <span className="text-sm text-[var(--foreground)]">
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
                        className="text-[var(--foreground-secondary)]"
                    />

                    <span className="text-sm text-[var(--foreground)]">
                        Mastery
                    </span>
                </div>
            </div>
        </CardSection>
    );
}