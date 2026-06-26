"use client";

import {
    ButtonHTMLAttributes,
} from "react";

export default function PrimaryButton({
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

            disabled:opacity-50
            "
            style={{
                background:
                    "var(--primary)",
            }}
        >
            {children}
        </button>
    );
}