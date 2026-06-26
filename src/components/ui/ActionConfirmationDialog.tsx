"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import Button from "@/components/ui/Button";

interface ActionConfirmationDialogProps {
    open: boolean;
    icon?: ReactNode;
    title: string;
    description: string;
    confirmText: string;
    cancelText?: string;
    showCancel?: boolean;
    destructive?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ActionConfirmationDialog({
    open,
    icon,
    title,
    description,
    confirmText,
    cancelText = "Cancel",
    showCancel = true,
    destructive = false,
    onConfirm,
    onCancel,
}: ActionConfirmationDialogProps) {
    const [mounted, setMounted] =
        useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
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
                    py-10
                    "
                    onClick={onCancel}
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.92,
                            y: 16,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.92,
                            y: 16,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                        className="
                        w-full
                        max-w-[340px]

                        rounded-3xl

                        border
                        border-[var(--border)]

                        bg-[var(--surface)]

                        p-6

                        shadow-2xl
                        "
                    >
                        {icon && (
                            <div
                                className="
                                mb-5

                                flex
                                h-16
                                w-16
                                items-center
                                justify-center

                                rounded-2xl

                                bg-[var(--surface-secondary)]

                                text-[var(--primary)]
                                "
                            >
                                {icon}
                            </div>
                        )}

                        <h2
                            className="
                            text-xl
                            font-semibold
                            text-[var(--foreground)]
                            "
                        >
                            {title}
                        </h2>

                        <p
                            className="
                            mt-3

                            text-sm
                            leading-6

                            text-[var(--foreground-secondary)]
                            "
                        >
                            {description}
                        </p>

                        <div
                            className={`
                                mt-8
                                ${showCancel
                                    ? "flex gap-3"
                                    : ""
                                }
                            `}
                        >
                            {showCancel && (
                                <Button
                                    variant="secondary"
                                    onClick={
                                        onCancel
                                    }
                                >
                                    {cancelText}
                                </Button>
                            )}

                            <Button
                                variant={
                                    destructive
                                        ? "danger"
                                        : "primary"
                                }
                                onClick={
                                    onConfirm
                                }
                            >
                                {confirmText}
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}