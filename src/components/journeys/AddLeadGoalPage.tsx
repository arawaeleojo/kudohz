import SettingsHeader from "@/components/profile/SettingsHeader";

export default function AddLeadGoalPage() {
    return (
        <div className="space-y-6">
            <SettingsHeader
                title="Add Lead Goal"
            />

            <p
                className="
                text-sm
                leading-7
                text-[#6B7280]
                "
            >
                Define a lead goal that
                supports your journey and
                brings you closer to your
                lag goal.
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
                        Lead Goal
                    </label>

                    <input
                        placeholder="Write Every Day"
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
                        placeholder="Why will this lead goal help you achieve your lag goal?"
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
                    Save Lead Goal
                </button>
            </div>
        </div>
    );
}