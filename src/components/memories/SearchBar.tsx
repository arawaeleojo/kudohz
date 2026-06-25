"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
    value: string;
    onChange: (
        value: string
    ) => void;
}

export default function SearchBar({
    value,
    onChange,
}: SearchBarProps) {
    return (
        <div
            className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-[#E8E1D7]
            bg-[#F7F3EC]
            px-4
            py-3
            "
        >
            <Search
                size={18}
                color="#6B7280"
            />

            <input
                value={value}
                onChange={(e) =>
                    onChange(
                        e.target.value
                    )
                }
                placeholder="Search memories..."
                className="
                flex-1
                bg-transparent
                outline-none
                text-sm
                "
            />

            {value && (
                <button
                    onClick={() =>
                        onChange("")
                    }
                >
                    <X
                        size={18}
                        color="#6B7280"
                    />
                </button>
            )}
        </div>
    );
}