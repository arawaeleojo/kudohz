import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export default function Card({
    children,
    className,
}: CardProps) {
    return (
        <div
            className={clsx(
                `
                rounded-3xl
                border
                shadow-[0_4px_16px_rgba(0,0,0,0.06)]

                bg-[var(--surface)]
                border-[var(--border)]

                transition-colors
                duration-300
                `,
                className
            )}
        >
            {children}
        </div>
    );
}