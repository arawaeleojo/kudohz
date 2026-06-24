import {
    Flame,
    BookOpen,
    Leaf,
    TreePine,
    CircleCheck,
    Sparkles,
} from "lucide-react";

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
                color="#0E5A64"
            />
        ),

        memory: (
            <BookOpen
                size={18}
                color="#0E5A64"
            />
        ),

        milestone: (
            <Leaf
                size={18}
                color="#2F7A59"
            />
        ),

        journey: (
            <TreePine
                size={18}
                color="#2F5A41"
            />
        ),

        action: (
            <CircleCheck
                size={18}
                color="#0E5A64"
            />
        ),

        achievement: (
            <Sparkles
                size={18}
                color="#E0A100"
            />
        ),
    };

    return (
        <div
            className="
            rounded-3xl
            border
            border-[#E8E1D7]
            bg-[#F7F3EC]
            p-4
            "
        >
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
                        text-[#111827]
                        "
                    >
                        {title}
                    </h3>

                    <p
                        className="
                        mt-1
                        text-sm
                        text-[#6B7280]
                        leading-6
                        "
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}