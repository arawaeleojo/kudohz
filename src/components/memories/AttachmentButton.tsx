import { LucideIcon } from "lucide-react";

interface AttachmentButtonProps {
    label: string;
    icon: LucideIcon;
}

export default function AttachmentButton({
    label,
    icon: Icon,
}: AttachmentButtonProps) {
    return (
        <button
            type="button"
            className="
            flex
            items-center
            gap-2

            rounded-full

            border
            border-[var(--border)]

            bg-[var(--surface)]

            px-4
            py-2.5

            text-sm
            font-medium

            text-[var(--foreground)]

            transition-all
            duration-200

            hover:bg-[var(--surface-secondary)]

            active:scale-95
            "
        >
            <Icon
                size={16}
                className="text-[var(--primary)]"
            />

            <span>{label}</span>
        </button>
    );
}