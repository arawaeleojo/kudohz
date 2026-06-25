"use client";

import { X } from "lucide-react";
import { ReactNode } from "react";

interface BottomSheetProps {
    open: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
}

export default function BottomSheet({
    open,
    title,
    children,
    onClose,
}: BottomSheetProps) {
    if (!open) return null;

    return (
        <>
            <div
                onClick={onClose}
                className="
                fixed
                inset-0
                bg-black/40
                z-40
                "
            />

            <div
                className="
                fixed
                bottom-0
                left-1/2
                -translate-x-1/2
                w-full
                max-w-sm
                bg-[#F7F3EC]
                rounded-t-3xl
                p-6
                z-50
                animate-in
                slide-in-from-bottom
                duration-200
                "
            >
                <div
                    className="
                    flex
                    items-center
                    justify-between
                    mb-6
                    "
                >
                    <h2
                        className="
                        text-lg
                        font-semibold
                        "
                    >
                        {title}
                    </h2>

                    <button
                        onClick={onClose}
                    >
                        <X size={22} />
                    </button>
                </div>

                {children}
            </div>
        </>
    );
}