"use client";

import {
    InputHTMLAttributes,
} from "react";

export default function TextInput(
    props: InputHTMLAttributes<HTMLInputElement>
) {
    return (
        <input
            {...props}
            className="
            w-full

            rounded-2xl

            border

            px-4

            py-3

            outline-none

            transition-all

            duration-200

            bg-[var(--surface)]

            border-[var(--border)]

            text-[var(--foreground)]

            placeholder:text-[var(--foreground-secondary)]

            focus:border-[var(--primary)]

            focus:ring-2

            focus:ring-[var(--primary)]

            focus:ring-opacity-20
            "
        />
    );
}