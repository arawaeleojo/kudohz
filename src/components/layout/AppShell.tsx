import { ReactNode } from "react";
import BottomNavigation from "../navigation/BottomNavigation";

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
      bg-[#F7F3EC]
      pb-24
      "
        >
            <section className="px-5 py-6">
                {children}
            </section>

            <BottomNavigation />
        </main>
    );
}