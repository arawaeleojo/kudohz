"use client";

import JourneyHeader from "./JourneyHeader";
import JourneyTimelineSelector from "./JourneyTimelineSelector";
import Button from "@/components/ui/Button";

export default function CreateJourneyPage() {
    return (
        <div className="space-y-6">
            <JourneyHeader
                title="New Journey"
            />

            <div>
                <p
                    className="
                    text-sm
                    leading-7
                    text-[#6B7280]
                    "
                >
                    Create a new journey and define
                    the person you want to become.
                </p>
            </div>

            <div
                className="
                rounded-3xl
                border
                border-[#E8E1D7]
                p-5
                space-y-5
                "
            >
                <div>
                    <label
                        className="
                        block
                        mb-2
                        text-sm
                        font-medium
                        text-[#111827]
                        "
                    >
                        Journey Name
                    </label>

                    <input
                        placeholder="Writer"
                        className="
                        w-full
                        rounded-2xl
                        border
                        border-[#E8E1D7]
                        bg-[#F7F3EC]
                        px-4
                        py-3
                        text-sm
                        "
                    />
                </div>

                
                <div>
                    <label
                        className="
                            block
                            mb-2
                            text-sm
                            font-medium
                            text-[#111827]
                            "
                    >
                        Why
                    </label>

                    <textarea
                        rows={4}
                        placeholder="Why do you want to become this?"
                        className="
                        w-full
                        rounded-2xl
                        border
                        border-[#E8E1D7]
                        bg-[#F7F3EC]
                        px-4
                        py-3
                        text-sm
                        resize-none
                        "
                    />
                </div>

                <JourneyTimelineSelector />

                <Button>
                    Create Journey
                </Button>
            </div>
        </div>
    );
}