"use client";

import {
    ButtonHTMLAttributes,
} from "react";

export default function DangerButton({
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className="
            w-full

            rounded-2xl

            py-3.5

            font-semibold

            text-white

            transition-all

            duration-200

            active:scale-[0.98]
            "
            style={{
                background:
                    "var(--danger)",
            }}
        >
            {children}
        </button>
    );
}