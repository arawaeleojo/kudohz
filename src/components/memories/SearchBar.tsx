"use client";

import { Search, X } from "lucide-react";
import { motion } from "framer-motion";

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
        <motion.div
            initial={{
                opacity: 0,
                y: 8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.25,
            }}
            className="
            flex
            items-center
            gap-3

            rounded-2xl

            border
            border-[var(--border)]

            bg-[var(--surface)]

            px-4
            py-3

            transition-colors

            focus-within:border-[var(--primary)]
            "
        >
            <Search
                size={18}
                className="text-[var(--foreground-secondary)]"
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

                text-sm

                text-[var(--foreground)]

                placeholder:text-[var(--foreground-secondary)]

                outline-none
                "
            />

            {value && (
                <button
                    onClick={() =>
                        onChange("")
                    }
                    className="
                    transition-opacity

                    hover:opacity-70
                    "
                >
                    <X
                        size={18}
                        className="text-[var(--foreground-secondary)]"
                    />
                </button>
            )}
        </motion.div>
    );
}