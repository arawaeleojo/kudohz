"use client";

import { useRouter } from "next/navigation";
import KudoMenu from "@/components/kudo/KudoMenu";
import IconButton from "@/components/ui/IconButton";

import {
    Bell,
    Search,
    Plus,
} from "lucide-react";

interface PageHeaderProps {
    title: string;
}

export default function PageHeader({
    title,
}: PageHeaderProps) {
    const router = useRouter();

    const renderActions = () => {
        switch (title.toLowerCase()) {
            case "profile":
                return (
                    <IconButton>
                        <Bell
                            size={22}
                            className="text-[var(--foreground)]"
                        />
                    </IconButton>
                );

            case "memories":
                return (
                    <div className="flex items-center gap-2">
                        <IconButton
                            onClick={() =>
                                router.push(
                                    "/memories/search"
                                )
                            }
                        >
                            <Search
                                size={20}
                                className="text-[var(--foreground)]"
                            />
                        </IconButton>

                        <IconButton
                            onClick={() =>
                                router.push(
                                    "/memories/new"
                                )
                            }
                        >
                            <Plus
                                size={20}
                                className="text-[var(--foreground)]"
                            />
                        </IconButton>
                    </div>
                );

            case "journeys":
                return (
                    <IconButton
                        onClick={() =>
                            router.push(
                                "/journeys/new"
                            )
                        }
                    >
                        <Plus
                            size={22}
                            className="text-[var(--foreground)]"
                        />
                    </IconButton>
                );

            case "kudo":
                return <KudoMenu />;

            default:
                return null;
        }
    };

    return (
        <>
            <div
                className="
                fixed
                top-0
                left-1/2
                -translate-x-1/2
                w-full
                max-w-sm
                bg-[var(--background)]
                transition-colors
                duration-300
                px-5
                pt-6
                pb-4
                z-40
                "
            >
                <div
                    className="
                    flex
                    items-center
                    justify-between
                    "
                >
                    <h1
                        className="
                        text-xl
                        font-bold
                        text-[var(--foreground)]
                        "
                    >
                        {title}
                    </h1>

                    {renderActions()}
                </div>
            </div>

            <div className="h-[72px]" />
        </>
    );
}