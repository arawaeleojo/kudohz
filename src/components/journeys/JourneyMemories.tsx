"use client";

import { useRouter } from "next/navigation";
import { BookOpen } from "lucide-react";

import CardSection from "@/components/ui/CardSection";

export default function JourneyMemories() {
    const router = useRouter();

    const memories = [
        "Published first article",
        "Finished chapter draft",
        "Got positive feedback",
    ];

    return (
        <CardSection
            title="Recent Memories"
            actionText="View"
            onAction={() =>
                router.push("/memories")
            }
        >
            <div className="space-y-3">
                {memories.map((memory) => (
                    <div
                        key={memory}
                        className="
                        flex
                        items-center
                        gap-3
                        "
                    >
                        <BookOpen
                            size={15}
                            className="text-[var(--primary)]"
                        />

                        <span
                            className="
                            text-sm
                            text-[var(--foreground)]
                            "
                        >
                            {memory}
                        </span>
                    </div>
                ))}
            </div>
        </CardSection>
    );
}