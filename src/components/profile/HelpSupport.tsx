import {
    CircleHelp,
    Mail,
    Bug,
    ChevronRight,
} from "lucide-react";

const supportItems = [
    {
        title: "Frequently Asked Questions",
        icon: CircleHelp,
    },
    {
        title: "Contact Support",
        icon: Mail,
    },
    {
        title: "Report a Bug",
        icon: Bug,
    },
];

export default function HelpSupport() {
    return (
        <div className="space-y-6">
            <div
                className="
                rounded-3xl
                border
                border-[#E8E1D7]
                overflow-hidden
                "
            >
                {supportItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.title}
                            className="
                            w-full
                            flex
                            items-center
                            justify-between
                            px-5
                            py-4
                            border-b
                            border-[#F3EEE7]
                            last:border-b-0
                            "
                        >
                            <div
                                className="
                                flex
                                items-center
                                gap-3
                                "
                            >
                                <Icon
                                    size={18}
                                    color="#0E5A64"
                                />

                                <span
                                    className="
                                    text-sm
                                    text-[#111827]
                                    "
                                >
                                    {item.title}
                                </span>
                            </div>

                            <ChevronRight
                                size={18}
                                color="#9CA3AF"
                            />
                        </button>
                    );
                })}
            </div>

            <div
                className="
                rounded-3xl
                border
                border-[#E8E1D7]
                p-5
                "
            >
                <h3
                    className="
                    text-base
                    font-semibold
                    text-[#111827]
                    "
                >
                    Need help?
                </h3>

                <p
                    className="
                    mt-3
                    text-sm
                    leading-6
                    text-[#6B7280]
                    "
                >
                    If you have questions, feedback, or
                    encounter any issues while using
                    Kudohz, we're here to help.
                </p>

                <p
                    className="
                    mt-4
                    text-sm
                    font-medium
                    text-[#0E5A64]
                    "
                >
                    support@kudohz.com
                </p>
            </div>
        </div>
    );
}