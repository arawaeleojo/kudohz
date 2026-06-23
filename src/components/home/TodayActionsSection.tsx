import { Plus } from "lucide-react";
import ActionItem from "./ActionItem";

export default function TodayActionsSection() {
    return (
        <section className="mt-8">
            <div
                className="
                flex
                items-center
                justify-between
                mb-4
                "
            >
                <h2
                    className="
                    text-lg
                    font-semibold
                    text-[#111827]
                    "
                >
                    Today's Actions
                </h2>

                <button
                    className="
                    flex
                    items-center
                    justify-center
                    h-10
                    w-10
                    rounded-full
                    bg-[#0E5A64]
                    "
                >
                    <Plus
                        size={18}
                        color="white"
                    />
                </button>
            </div>

            <div className="space-y-2">
                <ActionItem title="Write 500 words" />

                <ActionItem title="Meditate for 10 minutes" />

                <ActionItem title="Go for a workout" />
            </div>
        </section>
    );
}