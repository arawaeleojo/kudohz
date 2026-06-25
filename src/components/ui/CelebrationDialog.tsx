"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
    AnimatePresence,
    motion,
} from "framer-motion";

import NatureCelebration from "./NatureCelebration";
import { playCelebration } from "@/constants/sounds";

interface CelebrationDialogProps {
    open: boolean;
    icon?: ReactNode;
    title: string;
    description: string;
    primaryText: string;
    secondaryText?: string;
    onPrimary: () => void;
    onSecondary: () => void;
}

export default function CelebrationDialog({
    open,
    icon,
    title,
    description,
    primaryText,
    secondaryText = "Maybe Later",
    onPrimary,
    onSecondary,
}: CelebrationDialogProps) {
    const [mounted, setMounted] =
        useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!open) return;

        const timeout = setTimeout(() => {
            playCelebration();
        }, 200);

        return () =>
            clearTimeout(timeout);
    }, [open]);

    if (!mounted) return null;

    return createPortal(
        <>
            <NatureCelebration
                show={open}
            />

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="
                        fixed
                        inset-0
                        z-[100]
                        flex
                        items-center
                        justify-center
                        bg-black/40
                        px-8
                        "
                    >
                        <motion.div
                            initial={{
                                scale: 0.82,
                                y: 40,
                                opacity: 0,
                            }}
                            animate={{
                                scale: 1,
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                scale: 0.92,
                                opacity: 0,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 280,
                                damping: 22,
                            }}
                            className="
                            w-full
                            max-w-[320px]
                            rounded-3xl
                            bg-[#F7F3EC]
                            px-6
                            py-7
                            shadow-2xl
                            "
                        >
                            {icon && (
                                <motion.div
                                    initial={{
                                        scale: 0,
                                        rotate: -25,
                                    }}
                                    animate={{
                                        scale: 1,
                                        rotate: 0,
                                    }}
                                    transition={{
                                        delay: 0.15,
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 18,
                                    }}
                                    className="
                                    mb-6
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-[#EEF5F0]
                                    text-[#2F7A59]
                                    "
                                >
                                    {icon}
                                </motion.div>
                            )}

                            <motion.h2
                                initial={{
                                    opacity: 0,
                                    y: 12,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.25,
                                }}
                                className="
                                text-xl
                                font-semibold
                                text-[#111827]
                                "
                            >
                                {title}
                            </motion.h2>

                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 12,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.35,
                                }}
                                className="
                                mt-3
                                text-sm
                                leading-6
                                text-[#6B7280]
                                "
                            >
                                {description}
                            </motion.p>

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.45,
                                }}
                                className="
                                mt-8
                                flex
                                gap-3
                                "
                            >
                                <button
                                    onClick={
                                        onSecondary
                                    }
                                    className="
                                    flex-1
                                    rounded-2xl
                                    border
                                    border-[#D9D2C7]
                                    bg-white
                                    py-3
                                    text-sm
                                    font-medium
                                    transition-all
                                    hover:bg-[#F8F5EF]
                                    hover:scale-[1.01]
                                    "
                                >
                                    {
                                        secondaryText
                                    }
                                </button>

                                <button
                                    onClick={
                                        onPrimary
                                    }
                                    className="
                                    flex-1
                                    rounded-2xl
                                    bg-[#0E5A64]
                                    py-3
                                    text-sm
                                    font-medium
                                    text-white
                                    transition-all
                                    hover:bg-[#0B4A52]
                                    hover:scale-[1.03]
                                    "
                                >
                                    {primaryText}
                                </button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>,
        document.body
    );
}