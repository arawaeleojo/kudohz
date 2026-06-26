"use client";

import {
    ButtonHTMLAttributes,
} from "react";

export default function SecondaryButton({
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className="
            w-full

            rounded-2xl

            border

            py-3.5

            font-semibold

            transition-all

            duration-200

            active:scale-[0.98]
            "
            style={{
                background:
                    "var(--surface)",
                borderColor:
                    "var(--border)",
                color:
                    "var(--foreground)",
            }}
        >
            {children}
        </button>
    );
}