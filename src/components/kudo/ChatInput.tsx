"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatInput() {
    const [message, setMessage] =
        useState("");

    const hasMessage =
        message.trim().length > 0;

    return (
        <div
            className="
            fixed
            bottom-20
            left-0
            right-0
            z-50
            flex
            justify-center
            "
        >
            <div
                className="
                w-full
                max-w-sm
                px-5
                "
            >
                <motion.div
                    whileFocus={{
                        scale: 1.01,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className="
                    flex
                    items-center

                    rounded-full

                    border
                    border-[var(--border)]

                    bg-[var(--surface)]

                    px-2
                    py-2

                    shadow-sm

                    transition-all
                    duration-200

                    focus-within:border-[var(--primary)]
                    "
                >
                    <input
                        type="text"
                        value={message}
                        onChange={(e) =>
                            setMessage(
                                e.target.value
                            )
                        }
                        placeholder="Message Kudo..."
                        className="
                        flex-1

                        bg-transparent

                        px-3

                        text-sm

                        text-[var(--foreground)]

                        placeholder:text-[var(--foreground-secondary)]

                        outline-none
                        "
                    />

                    <motion.button
                        whileHover={{
                            scale: hasMessage
                                ? 1.05
                                : 1,
                        }}
                        whileTap={{
                            scale: hasMessage
                                ? 0.95
                                : 1,
                        }}
                        disabled={!hasMessage}
                        className={`
                            flex

                            h-10
                            w-10

                            shrink-0

                            items-center
                            justify-center

                            rounded-full

                            transition-all

                            ${hasMessage
                                ? "bg-[var(--primary)]"
                                : "bg-[var(--border)]"
                            }
                        `}
                    >
                        <Send
                            size={16}
                            color="white"
                        />
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}