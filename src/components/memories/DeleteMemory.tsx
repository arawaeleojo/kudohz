"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ActionConfirmationDialog from "@/components/ui/ActionConfirmationDialog";

export default function DeleteMemory() {
    const [open, setOpen] =
        useState(false);

    function handleDelete() {
        setOpen(false);

        // TODO:
        // Delete memory here
    }

    return (
        <>
            <Card
                className="
                border-[var(--danger)]
                p-5
                "
            >
                <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                >
                    <div
                        className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center

                        rounded-2xl

                        bg-red-500/10

                        text-[var(--danger)]
                        "
                    >
                        <Trash2 size={20} />
                    </div>

                    <div>
                        <h3
                            className="
                            text-base
                            font-semibold

                            text-[var(--danger)]
                            "
                        >
                            Delete Memory
                        </h3>

                        <p
                            className="
                            mt-1

                            text-sm

                            text-[var(--foreground-secondary)]
                            "
                        >
                            Permanently remove this
                            memory. This action
                            cannot be undone.
                        </p>
                    </div>
                </div>

                <div className="mt-6">
                    <Button
                        variant="danger"
                        onClick={() =>
                            setOpen(true)
                        }
                    >
                        Delete Memory
                    </Button>
                </div>
            </Card>

            <ActionConfirmationDialog
                open={open}
                icon={<Trash2 size={28} />}
                title="Delete Memory?"
                description="This memory will be permanently deleted. This action cannot be undone."
                confirmText="Delete Memory"
                destructive
                onCancel={() =>
                    setOpen(false)
                }
                onConfirm={
                    handleDelete
                }
            />
        </>
    );
}