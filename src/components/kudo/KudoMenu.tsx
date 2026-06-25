"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
    MoreVertical,
    Search,
    Trash2,
    Download,
    Info,
} from "lucide-react";

import ActionConfirmationDialog from "@/components/ui/ActionConfirmationDialog";

export default function KudoMenu() {
    const router = useRouter();

    const [open, setOpen] = useState(false);

    const [showClearDialog, setShowClearDialog] =
        useState(false);

    const [showExportDialog, setShowExportDialog] =
        useState(false);

    const menuRef =
        useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(
            event: MouseEvent
        ) {
            if (
                menuRef.current &&
                !menuRef.current.contains(
                    event.target as Node
                )
            ) {
                setOpen(false);
            }
        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

    function MenuItem({
        icon,
        label,
        onClick,
    }: {
        icon: React.ReactNode;
        label: string;
        onClick: () => void;
    }) {
        return (
            <button
                onClick={() => {
                    onClick();
                    setOpen(false);
                }}
                className="
                flex
                items-center
                gap-3
                w-full
                px-4
                py-3
                text-sm
                text-[#374151]
                hover:bg-[#F8F5EF]
                transition-colors
                "
            >
                {icon}

                {label}
            </button>
        );
    }

    return (
        <>
            <div
                ref={menuRef}
                className="relative"
            >
                <button
                    onClick={() =>
                        setOpen(!open)
                    }
                >
                    <MoreVertical size={20} />
                </button>

                {open && (
                    <div
                        className="
                        absolute
                        right-0
                        top-10
                        w-56
                        rounded-2xl
                        border
                        border-[#E5DDD2]
                        bg-white
                        shadow-lg
                        overflow-hidden
                        z-50
                        "
                    >
                        <MenuItem
                            icon={
                                <Search size={18} />
                            }
                            label="Search"
                            onClick={() =>
                                router.push(
                                    "/kudo/search"
                                )
                            }
                        />

                        <MenuItem
                            icon={
                                <Trash2 size={18} />
                            }
                            label="Clear Chat"
                            onClick={() =>
                                setShowClearDialog(
                                    true
                                )
                            }
                        />

                        <MenuItem
                            icon={
                                <Download size={18} />
                            }
                            label="Export Chat"
                            onClick={() =>
                                setShowExportDialog(
                                    true
                                )
                            }
                        />

                        <MenuItem
                            icon={
                                <Info size={18} />
                            }
                            label="About Kudo"
                            onClick={() =>
                                router.push(
                                    "/kudo/about"
                                )
                            }
                        />
                    </div>
                )}
            </div>

            <ActionConfirmationDialog
                open={showClearDialog}
                icon={<Trash2 size={28} />}
                title="Clear Chat?"
                description="This will remove your conversation with Kudo. Your journeys, goals and memories will not be deleted."
                confirmText="Clear Chat"
                destructive
                onCancel={() =>
                    setShowClearDialog(
                        false
                    )
                }
                onConfirm={() =>
                    setShowClearDialog(
                        false
                    )
                }
            />

            <ActionConfirmationDialog
                open={showExportDialog}
                icon={<Download size={28} />}
                title="Coming Soon"
                description="Export Chat will be available in a future update."
                confirmText="OK"
                showCancel={false}
                onConfirm={() =>
                    setShowExportDialog(false)
                }
                onCancel={() =>
                    setShowExportDialog(false)
                }
            />
        </>
    );
}