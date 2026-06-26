"use client";

import {
    CheckCircle2,
    PlusCircle,
} from "lucide-react";

interface ActionItemProps {
    title: string;
    completed: boolean;
    onToggle: () => void;
}

export default function ActionItem({
    title,
    completed,
    onToggle,
}: ActionItemProps) {
    return (
        <button
            onClick={onToggle}
            className="
            w-full
            flex
            items-center
            gap-3
            py-2
            px-1
            rounded-xl
            transition-all
            duration-200
            hover:bg-[var(--surface-secondary)]
            active:scale-[0.99]
            "
        >
            {completed ? (
                <CheckCircle2
                    size={20}
                    style={{
                        color: "var(--success)",
                    }}
                />
            ) : (
                <PlusCircle
                    size={20}
                    style={{
                        color: "var(--primary)",
                    }}
                />
            )}

            <span
                className="
                text-sm
                transition-all
                duration-200
                "
                style={{
                    color: completed
                        ? "var(--foreground-secondary)"
                        : "var(--foreground)",
                    textDecoration:
                        completed
                            ? "line-through"
                            : "none",
                }}
            >
                {title}
            </span>
        </button>
    );
}