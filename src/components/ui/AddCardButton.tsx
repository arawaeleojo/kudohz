"use client";

import { Plus } from "lucide-react";

interface AddCardButtonProps {
    label: string;
    onClick: () => void;
}

export default function AddCardButton({
    label,
    onClick,
}: AddCardButtonProps) {
    return (
        <button
            onClick={onClick}
            className="
            w-full

            rounded-3xl
            border-2
            border-dashed

            py-4

            flex
            items-center
            justify-center
            gap-2

            font-medium

            transition-all
            duration-200

            hover:bg-[var(--surface-secondary)]
            active:scale-[0.98]
            "
            style={{
                borderColor: "var(--primary)",
                color: "var(--primary)",
            }}
        >
            <Plus size={18} />

            {label}
        </button>
    );
}