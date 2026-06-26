"use client";

import {
    TextareaHTMLAttributes,
} from "react";

export default function TextArea(
    props: TextareaHTMLAttributes<HTMLTextAreaElement>
) {
    return (
        <textarea
            {...props}
            rows={5}
            className="
            w-full

            rounded-2xl

            border

            px-4

            py-3

            resize-none

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