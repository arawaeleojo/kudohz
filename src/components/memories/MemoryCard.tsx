"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { useRouter } from "next/navigation";

import Card from "@/components/ui/Card";

interface MemoryCardProps {
    image: string;
    title: string;
    preview: string;
    date: string;
    tag: string;
}

export default function MemoryCard({
    image,
    title,
    preview,
    date,
    tag,
}: MemoryCardProps) {
    const router = useRouter();

    return (
        <motion.button
            whileHover={{
                y: -2,
            }}
            whileTap={{
                scale: 0.98,
            }}
            transition={{
                duration: 0.2,
            }}
            onClick={() =>
                router.push("/memories/1")
            }
            className="
            group
            mb-4
            w-full
            text-left
            "
        >
            <Card
                className="
                flex
                gap-4
                overflow-hidden
                p-3
                "
            >
                <div
                    className="
                    relative

                    h-28
                    w-24

                    overflow-hidden

                    rounded-xl

                    shrink-0
                    "
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        unoptimized
                        className="
                        object-cover

                        transition-transform
                        duration-500

                        group-hover:scale-105
                        "
                    />
                </div>

                <div
                    className="
                    flex
                    min-w-0
                    flex-1
                    flex-col
                    "
                >
                    <h3
                        className="
                        text-sm
                        font-semibold
                        leading-5

                        text-[var(--foreground)]
                        "
                    >
                        {title}
                    </h3>

                    <p
                        className="
                        mt-2

                        flex-1

                        text-xs
                        leading-5

                        text-[var(--foreground-secondary)]
                        "
                    >
                        {preview}
                    </p>

                    <div
                        className="
                        mt-4

                        flex
                        items-center
                        justify-between
                        "
                    >
                        <div
                            className="
                            flex
                            items-center
                            gap-1.5

                            text-xs

                            text-[var(--primary)]
                            "
                        >
                            <CalendarDays
                                size={13}
                            />

                            <span>
                                {date}
                            </span>
                        </div>

                        <span
                            className="
                            rounded-full

                            bg-[var(--surface-secondary)]

                            px-3
                            py-1

                            text-[10px]
                            font-semibold

                            text-[var(--success)]
                            "
                        >
                            {tag}
                        </span>
                    </div>
                </div>
            </Card>
        </motion.button>
    );
}