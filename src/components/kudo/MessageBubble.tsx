"use client";

import { motion } from "framer-motion";

interface MessageBubbleProps {
    role: "kudo" | "user";
    content: string;
}

export default function MessageBubble({
    role,
    content,
}: MessageBubbleProps) {
    const isUser = role === "user";

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 12,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
            className={`
                flex
                ${isUser
                    ? "justify-end"
                    : "justify-start"
                }
            `}
        >
            <div
                className={`
                    max-w-[80%]
                    px-4
                    py-3

                    text-sm
                    leading-6

                    shadow-sm

                    ${isUser
                        ? "rounded-2xl rounded-br-md bg-[var(--primary)] text-white"
                        : "rounded-2xl rounded-bl-md bg-[var(--surface-secondary)] text-[var(--foreground)]"
                    }
                `}
            >
                {content}
            </div>
        </motion.div>
    );
}