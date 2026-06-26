import { ReactNode } from "react";
import BottomNavigation from "../navigation/BottomNavigation";
import Page from "@/components/ui/Page";

interface AppShellProps {
    children: ReactNode;
}

export default function AppShell({
    children,
}: AppShellProps) {
    return (
        <main
            className="
            min-h-dvh
            w-full
            max-w-sm
            mx-auto
            bg-[var(--background)]
            text-[var(--foreground)]
            transition-colors
            duration-300
            pb-24
            "
        >
            <Page>
                {children}
            </Page>

            <BottomNavigation />
        </main>
    );
}