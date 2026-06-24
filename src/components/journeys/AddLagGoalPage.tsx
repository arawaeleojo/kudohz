import SettingsHeader from "@/components/profile/SettingsHeader";

export default function AddLagGoalPage() {
    return (
        <div className="space-y-6">
            <SettingsHeader
                title="Add Lag Goal"
            />

            <p
                className="
                text-sm
                leading-7
                text-[#6B7280]
                "
            >
                Define an outcome you want
                this journey to help you
                achieve.
            </p>

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
                        Lag Goal
                    </label>

                    <input
                        placeholder="Publish a novel"
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
                        Why This Matters
                    </label>

                    <textarea
                        rows={4}
                        placeholder="Why is this outcome important to you?"
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
                    Save Lag Goal
                </button>
            </div>
        </div>
    );
}