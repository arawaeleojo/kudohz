"use client";

import {
    ButtonHTMLAttributes,
    ReactNode,
} from "react";

import clsx from "clsx";

interface IconButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "default" | "danger";
    size?: "sm" | "md" | "lg";
}

export default function IconButton({
    children,
    variant = "default",
    size = "md",
    className,
    ...props
}: IconButtonProps) {
    const sizes = {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
    };

    return (
        <button
            {...props}
            className={clsx(
                `
                rounded-full

                flex
                items-center
                justify-center

                transition-all
                duration-200

                active:scale-90
                hover:bg-[var(--surface-secondary)]
                `,
                sizes[size],
                className
            )}
            style={{
                color:
                    variant === "danger"
                        ? "var(--danger)"
                        : "var(--primary)",
            }}
        >
            {children}
        </button>
    );
}