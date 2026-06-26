"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

import Card from "@/components/ui/Card";

export default function MemoryHero() {
    return (
        <Card className="overflow-hidden p-0">
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.97,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 0.4,
                }}
                className="relative h-56"
            >
                <Image
                    src="https://picsum.photos/600/400"
                    alt="Memory"
                    fill
                    unoptimized
                    className="object-cover"
                />
            </motion.div>

            <div className="p-5">
                <span
                    className="
                    inline-flex

                    rounded-full

                    bg-[var(--surface-secondary)]

                    px-3
                    py-1

                    text-xs
                    font-semibold

                    text-[var(--success)]
                    "
                >
                    Writer
                </span>

                <h2
                    className="
                    mt-4

                    text-xl
                    font-bold

                    text-[var(--foreground)]
                    "
                >
                    Wrote the opening scene today.
                </h2>

                <div
                    className="
                    mt-3

                    flex
                    items-center
                    gap-2

                    text-sm

                    text-[var(--foreground-secondary)]
                    "
                >
                    <CalendarDays
                        size={16}
                    />

                    <span>
                        May 20, 2025
                    </span>
                </div>
            </div>
        </Card>
    );
}