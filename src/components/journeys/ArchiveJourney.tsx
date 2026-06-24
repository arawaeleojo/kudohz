import { Trash2 } from "lucide-react";

export default function ArchiveJourney() {
    return (
        <div
            className="
            rounded-3xl
            border
            border-[#FDE2E2]
            p-5
            "
        >
            <div
                className="
                flex
                items-center
                gap-3
                mb-3
                "
            >
                <Trash2
                    size={18}
                    color="#DC2626"
                />

                <h2
                    className="
                    text-base
                    font-semibold
                    text-[#DC2626]
                    "
                >
                    Archive Journey
                </h2>
            </div>

            <p
                className="
                text-sm
                leading-6
                text-[#6B7280]
                "
            >
                Move this journey to your archive.
                You can restore it later without
                losing memories, goals, or progress.
            </p>

            <button
                className="
                mt-4
                w-full
                rounded-2xl
                border
                border-[#FCA5A5]
                py-3
                text-[#DC2626]
                font-medium
                "
            >
                Archive Journey
            </button>
        </div>
    );
}