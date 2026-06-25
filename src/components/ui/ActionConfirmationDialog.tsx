"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

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

    if (!mounted || !open) return null;

    return createPortal(
        <div
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
        >
            <div
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
                    <div
                        className="
                        mb-6
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#EFE8DE]
                        text-[#0E5A64]
                        "
                    >
                        {icon}
                    </div>
                )}

                <h2
                    className="
                    text-xl
                    font-semibold
                    text-[#111827]
                    "
                >
                    {title}
                </h2>

                <p
                    className="
                    mt-3
                    text-sm
                    leading-6
                    text-[#6B7280]
                    "
                >
                    {description}
                </p>

                <div
                    className={
                        showCancel
                            ? "mt-8 flex gap-3"
                            : "mt-8"
                    }
                >
                    {showCancel && (
                        <button
                            onClick={onCancel}
                            className="
                            flex-1
                            rounded-2xl
                            border
                            border-[#D9D2C7]
                            bg-white
                            py-3
                            text-sm
                            font-medium
                            text-[#374151]
                            transition-colors
                            hover:bg-[#F8F5EF]
                            "
                        >
                            {cancelText}
                        </button>
                    )}

                    <button
                        onClick={onConfirm}
                        className={`
                            ${showCancel
                                ? "flex-1"
                                : "w-full"
                            }
                            rounded-2xl
                            py-3
                            text-sm
                            font-medium
                            text-white
                            transition-colors
                            ${destructive
                                ? "bg-[#DC2626] hover:bg-[#B91C1C]"
                                : "bg-[#0E5A64] hover:bg-[#0B4A52]"
                            }
                        `}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}