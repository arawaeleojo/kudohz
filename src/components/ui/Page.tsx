import { ReactNode } from "react";
import clsx from "clsx";

interface PageProps {
    children: ReactNode;
    className?: string;
}

export default function Page({
    children,
    className,
}: PageProps) {
    return (
        <section
            className={clsx(
                `
                px-5
                py-6
                `,
                className
            )}
        >
            {children}
        </section>
    );
}