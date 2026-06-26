"use client";

import { Flame } from "lucide-react";
import { motion } from "framer-motion";

export default function KudoIntroCard() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 16,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
            className="
            flex
            flex-col
            items-center
            text-center
            pt-2
            pb-6
            "
        >
            <motion.div
                initial={{
                    scale: 0.9,
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    y: [0, -3, 0],
                    scale: [1, 1.02, 1],
                }}
                transition={{
                    opacity: {
                        duration: 0.5,
                    },
                    scale: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                className="
                relative

                mb-5

                flex
                h-20
                w-20
                items-center
                justify-center

                rounded-full
                "
                style={{
                    background:
                        "var(--surface-secondary)",
                }}
            >
                <motion.div
                    animate={{
                        opacity: [
                            0.3,
                            0.6,
                            0.3,
                        ],
                        scale: [
                            1,
                            1.08,
                            1,
                        ],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                    absolute
                    inset-0
                    rounded-full
                    "
                    style={{
                        background:
                            "var(--primary)",
                        filter:
                            "blur(14px)",
                    }}
                />

                <Flame
                    size={36}
                    strokeWidth={2.4}
                    style={{
                        color:
                            "var(--primary)",
                    }}
                    className="relative z-10"
                />
            </motion.div>

            <motion.h2
                initial={{
                    opacity: 0,
                    y: 8,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 0.15,
                }}
                className="
                text-2xl
                font-bold
                text-[var(--foreground)]
                "
            >
                Hi, I'm Kudo.
            </motion.h2>

            <motion.p
                initial={{
                    opacity: 0,
                    y: 8,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 0.3,
                }}
                className="
                mt-2
                text-sm
                text-[var(--foreground-secondary)]
                "
            >
                Your accountability coach.
            </motion.p>
        </motion.div>
    );
}