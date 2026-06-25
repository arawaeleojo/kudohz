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
            transition-all
            "
        >
            {completed ? (
                <CheckCircle2
                    size={20}
                    color="#2F7A59"
                />
            ) : (
                <PlusCircle
                    size={20}
                    color="#0E5A64"
                />
            )}

            <span
                className={`
                    text-sm
                    transition-all
                    ${completed
                        ? "line-through text-[#9CA3AF]"
                        : "text-[#111827]"
                    }
                `}
            >
                {title}
            </span>
        </button>
    );
}