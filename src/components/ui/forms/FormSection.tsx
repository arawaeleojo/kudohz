import { ReactNode } from "react";

interface FormSectionProps {
    title?: string;
    children: ReactNode;
}

export default function FormSection({
    title,
    children,
}: FormSectionProps) {
    return (
        <section className="space-y-4">
            {title && (
                <h2
                    className="
                    text-base
                    font-semibold
                    text-[var(--foreground)]
                    "
                >
                    {title}
                </h2>
            )}

            <div className="space-y-5">
                {children}
            </div>
        </section>
    );
}