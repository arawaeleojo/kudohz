import { Leaf } from "lucide-react";

export default function AboutKudohz() {
    return (
        <div className="space-y-6">
            <div
                className="
                rounded-3xl
                border
                border-[#E8E1D7]
                p-6
                text-center
                "
            >
                <div
                    className="
                    mx-auto
                    mb-4
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EEF5F0]
                    "
                >
                    <Leaf
                        size={28}
                        color="#0E5A64"
                    />
                </div>

                <h2
                    className="
                    text-2xl
                    font-bold
                    text-[#111827]
                    "
                >
                    Kudohz
                </h2>

                <p
                    className="
                    mt-2
                    text-sm
                    text-[#6B7280]
                    "
                >
                    Version 1.0.0
                </p>
            </div>

            <div
                className="
                rounded-3xl
                border
                border-[#E8E1D7]
                p-6
                "
            >
                <h3
                    className="
                    text-lg
                    font-semibold
                    text-[#111827]
                    "
                >
                    Keep Becoming.
                </h3>

                <p
                    className="
                    mt-4
                    text-sm
                    leading-7
                    text-[#374151]
                    "
                >
                    Kudohz is a personal growth companion
                    designed to help people become who
                    they want to be through identities,
                    journeys, memories, and accountability.
                </p>

                <p
                    className="
                    mt-4
                    text-sm
                    leading-7
                    text-[#374151]
                    "
                >
                    Instead of focusing on streaks,
                    points, or endless productivity,
                    Kudohz focuses on growth,
                    consistency, and the person
                    you are becoming.
                </p>
            </div>

            <div
                className="
                rounded-3xl
                border
                border-[#E8E1D7]
                p-6
                "
            >
                <h3
                    className="
                    text-lg
                    font-semibold
                    text-[#111827]
                    "
                >
                    Built For Growth
                </h3>

                <div
                    className="
                    mt-4
                    space-y-3
                    text-sm
                    text-[#374151]
                    "
                >
                    <p>🌱 Identities</p>

                    <p>🌳 Long-term journeys</p>

                    <p>📖 Meaningful memories</p>

                    <p>🔥 Accountability through Kudo</p>
                </div>
            </div>
        </div>
    );
}