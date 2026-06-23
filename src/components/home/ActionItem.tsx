import { PlusCircle } from "lucide-react";

interface ActionItemProps {
    title: string;
}

export default function ActionItem({
    title,
}: ActionItemProps) {
    return (
        <button
            className="
            w-full
            flex
            items-center
            gap-3
            py-2
            "
        >
            <PlusCircle
                size={18}
                color="#0E5A64"
            />

            <span
                className="
                text-sm
                text-[#111827]
                "
            >
                {title}
            </span>
        </button>
    );
}