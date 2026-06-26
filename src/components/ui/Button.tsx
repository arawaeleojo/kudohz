"use client";

import {
    ButtonHTMLAttributes,
    ReactNode,
} from "react";
import clsx from "clsx";

type Variant =
    | "primary"
    | "secondary"
    | "danger";

type Size =
    | "sm"
    | "md"
    | "lg";

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    fullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    loading?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    fullWidth = true,
    leftIcon,
    rightIcon,
    loading = false,
    disabled,
    className,
    ...props
}: ButtonProps) {
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-3 text-sm",
        lg: "px-6 py-4 text-base",
    };

    return (
        <button
            {...props}
            disabled={
                disabled || loading
            }
            className={clsx(
                `
                rounded-2xl

                font-semibold

                transition-all

                duration-200

                active:scale-[0.98]

                disabled:opacity-50

                disabled:cursor-not-allowed

                flex

                items-center

                justify-center

                gap-2
                `,

                fullWidth && "w-full",

                sizes[size],

                className
            )}
            style={{
                ...(variant ===
                    "primary" && {
                    background:
                        "var(--primary)",
                    color: "white",
                }),

                ...(variant ===
                    "secondary" && {
                    background:
                        "var(--surface)",
                    color:
                        "var(--foreground)",
                    border:
                        "1px solid var(--border)",
                }),

                ...(variant ===
                    "danger" && {
                    background:
                        "var(--danger)",
                    color: "white",
                }),
            }}
        >
            {loading ? (
                <>
                    <svg
                        className="
            h-4
            w-4
            animate-spin
            "
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            opacity="0.25"
                        />

                        <path
                            d="M22 12a10 10 0 0 1-10 10"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>

                    <span>{children}</span>
                </>
            ) : (
                <>
                    {leftIcon}
                    {children}
                    {rightIcon}
                </>
            )}
        </button>
    );
}