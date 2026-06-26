import SettingsHeader from "@/components/profile/SettingsHeader";

interface PageIntroProps {
    title: string;
    description: string;
}

export default function PageIntro({
    title,
    description,
}: PageIntroProps) {
    return (
        <div className="space-y-6">
            <SettingsHeader title={title} />

            <p
                className="
                text-sm
                leading-7
                text-[var(--foreground-secondary)]
                "
            >
                {description}
            </p>
        </div>
    );
}