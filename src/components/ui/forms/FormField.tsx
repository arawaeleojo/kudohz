import { ReactNode } from "react";

interface FormFieldProps {
    label: string;
    children: ReactNode;
}

export default function FormField({
    label,
    children,
}: FormFieldProps) {
    return (
        <div className="space-y-2">
            <label
                className="
                text-sm
                font-medium
                text-[var(--foreground)]
                "
            >
                {label}
            </label>

            {children}
        </div>
    );
}