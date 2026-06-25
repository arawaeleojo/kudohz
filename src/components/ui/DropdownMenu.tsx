"use client";

import { ReactNode, useEffect, useRef } from "react";

interface DropdownMenuProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function DropdownMenu({
    open,
    onClose,
    children,
}: DropdownMenuProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (
                ref.current &&
                !ref.current.contains(
                    event.target as Node
                )
            ) {
                onClose();
            }
        }

        if (open) {
            document.addEventListener(
                "mousedown",
                handleClick
            );
        }

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClick
            );
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            ref={ref}
            className="
            absolute
            right-0
            top-12
            w-56
            rounded-2xl
            bg-white
            shadow-lg
            border
            border-[#E8E1D7]
            overflow-hidden
            z-50
            "
        >
            {children}
        </div>
    );
}