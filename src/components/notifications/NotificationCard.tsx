import {
    Flame,
    BookOpen,
    Leaf,
    TreePine,
    CircleCheck,
    Sparkles,
} from "lucide-react";

import Card from "@/components/ui/Card";

interface NotificationCardProps {
    title: string;
    description: string;
    type:
    | "kudo"
    | "memory"
    | "milestone"
    | "journey"
    | "action"
    | "achievement";
}

export default function NotificationCard({
    title,
    description,
    type,
}: NotificationCardProps) {
    const iconMap = {
        kudo: (
            <Flame
                size={18}
                style={{
                    color: "var(--primary)",
                }}
            />
        ),

        memory: (
            <BookOpen
                size={18}
                style={{
                    color: "var(--primary)",
                }}
            />
        ),

        milestone: (
            <Leaf
                size={18}
                style={{
                    color: "var(--success)",
                }}
            />
        ),

        journey: (
            <TreePine
                size={18}
                style={{
                    color: "var(--success)",
                }}
            />
        ),

        action: (
            <CircleCheck
                size={18}
                style={{
                    color: "var(--primary)",
                }}
            />
        ),

        achievement: (
            <Sparkles
                size={18}
                style={{
                    color: "var(--warning)",
                }}
            />
        ),
    };

    return (
        <Card className="p-4">
            <div
                className="
                flex
                gap-3
                "
            >
                <div
                    className="
                    mt-1
                    shrink-0
                    "
                >
                    {iconMap[type]}
                </div>

                <div>
                    <h3
                        className="
                        text-sm
                        font-semibold
                        text-[var(--foreground)]
                        "
                    >
                        {title}
                    </h3>

                    <p
                        className="
                        mt-1
                        text-sm
                        leading-6
                        text-[var(--foreground-secondary)]
                        "
                    >
                        {description}
                    </p>
                </div>
            </div>
        </Card>
    );
}