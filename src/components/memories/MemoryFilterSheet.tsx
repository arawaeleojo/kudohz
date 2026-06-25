"use client";

import BottomSheet from "@/components/ui/BottomSheet";

import JourneyFilterSection from "./JourneyFilterSection";
import SortFilterSection from "./SortFilterSection";
import AttachmentFilterSection from "./AttachmentFilterSection";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function MemoryFilterSheet({
    open,
    onClose,
}: Props) {
    return (
        <BottomSheet
            open={open}
            onClose={onClose}
            title="Filters"
        >
            <div className="space-y-8">
                <JourneyFilterSection />

                <SortFilterSection />

                <AttachmentFilterSection />

                <div className="space-y-3">
                    <button
                        className="
                        w-full
                        rounded-2xl
                        border
                        border-[#E8E1D7]
                        py-3
                        font-medium
                        "
                    >
                        Reset Filters
                    </button>

                    <button
                        className="
                        w-full
                        rounded-2xl
                        bg-[#0E5A64]
                        py-3
                        text-white
                        font-medium
                        "
                    >
                        Apply Filters
                    </button>
                </div>
            </div>
        </BottomSheet>
    );
}