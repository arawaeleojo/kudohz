import { TreePine } from "lucide-react";

export default function JourneyHero() {
    return (
        <div
            className="
            rounded-3xl
            border
            border-[#E8E1D7]
            p-6
            "
        >
            <div
                className="
                flex
                flex-col
                items-center
                text-center
                "
            >
                <TreePine
                    size={100}
                    strokeWidth={1.5}
                    color="#2F5A41"
                />

                <span
                    className="
                    mt-4
                    px-4
                    py-1.5
                    rounded-full
                    bg-[#EEF5F0]
                    text-[#2F7A59]
                    text-xs
                    font-semibold
                    "
                >
                    Growing
                </span>

                <div className="mt-5 w-full">
                    <div
                        className="
                        flex
                        items-center
                        justify-between
                        text-xs
                        text-[#6B7280]
                        mb-2
                        "
                    >
                        <span>Day 24</span>

                        <span>90 Day Journey</span>
                    </div>

                    <div
                        className="
                        h-2
                        rounded-full
                        bg-[#E8E1D7]
                        overflow-hidden
                        "
                    >
                        <div
                            className="
                            h-full
                            w-[27%]
                            bg-[#0E5A64]
                            rounded-full
                            "
                        />
                    </div>

                    <p
                        className="
                        mt-2
                        text-xs
                        text-[#6B7280]
                        "
                    >
                        Day 24 of 90
                    </p>
                </div>

                <p
                    className="
                    mt-5
                    text-sm
                    leading-7
                    text-[#374151]
                    max-w-[260px]
                    "
                >
                    I want to tell stories that
                    inspire and move people.
                </p>
            </div>
        </div>
    );
}