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
            border-[#E8E1D7]
            bg-[#F7F3EC]
            px-4
            py-2.5
            text-sm
            text-[#374151]
            transition-colors
            hover:bg-[#EFE8DE]
            "
        >
            <Icon
                size={16}
                color="#0E5A64"
            />

            {label}
        </button>
    );
}