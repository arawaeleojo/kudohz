import {
    BookText,
    Bell,
    Sparkles,
    Shield,
    CircleHelp,
    Info,
    ChevronRight,
} from "lucide-react";

const settings = [
    {
        title: "Journal Settings",
        icon: BookText,
    },
    {
        title: "Notification Preferences",
        icon: Bell,
    },
    {
        title: "Kudo Settings",
        icon: Sparkles,
    },
    {
        title: "Privacy & Security",
        icon: Shield,
    },
    {
        title: "Help & Support",
        icon: CircleHelp,
    },
    {
        title: "About Kudohz",
        icon: Info,
    },
];

export default function ProfileSettings() {
    return (
        <div
            className="
                mt-6
                rounded-3xl
                border
                border-[#E8E1D7]
                overflow-hidden
                "
        >
            {settings.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="
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
                text-[#111827]
                text-sm
                "
                            >
                                {item.title}
                            </span>
                        </div>

                        <ChevronRight
                            size={18}
                            color="#9CA3AF"
                        />
                    </div>
                );
            })}
        </div>
    );
}