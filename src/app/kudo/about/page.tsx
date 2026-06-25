import AppShell from "@/components/layout/AppShell";
import SettingsHeader from "@/components/profile/SettingsHeader";

export default function AboutKudoPage() {
    return (
        <AppShell>
            <SettingsHeader title="About Kudo" />

            <div className="space-y-6 text-sm leading-7 text-[#374151]">
                <p>
                    Kudo is your AI accountability coach.
                </p>

                <p>
                    Unlike general-purpose AI assistants,
                    Kudo only helps you with your
                    journeys, goals, habits and growth
                    inside Kudohz.
                </p>

                <p>
                    Kudo won't answer unrelated questions.
                    Its purpose is to help you stay
                    focused on becoming the person you
                    want to become.
                </p>

                <div className="pt-6 border-t border-[#E5DDD2]">
                    <p className="text-[#6B7280]">
                        Version 1.0
                    </p>
                </div>
            </div>
        </AppShell>
    );
}