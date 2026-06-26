"use client";

import {
    SelectHTMLAttributes,
} from "react";

export default function Select(
    props: SelectHTMLAttributes<HTMLSelectElement>
) {
    return (
        <select
            {...props}
            className="
            w-full

            rounded-2xl

            border

            border-[var(--border)]

            bg-[var(--surface)]

            px-4

            py-3

            text-sm

            text-[var(--foreground)]

            outline-none

            transition-all

            focus:border-[var(--primary)]

            focus:ring-2

            focus:ring-[var(--primary)]
            "
        />
    );
}