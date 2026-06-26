"use client";

import { useState } from "react";

import {
    Lock,
    Trash2,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ActionConfirmationDialog from "@/components/ui/ActionConfirmationDialog";

import FormSection from "@/components/ui/forms/FormSection";
import FormField from "@/components/ui/forms/FormField";
import TextInput from "@/components/ui/forms/TextInput";

export default function SecuritySettings() {
    const [
        deleteDialogOpen,
        setDeleteDialogOpen,
    ] = useState(false);

    function handleDeleteAccount() {
        setDeleteDialogOpen(false);

        // TODO:
        // Delete account
    }

    return (
        <>
            <Card className="p-5">
                <div
                    className="
                    mb-6
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

                        bg-[var(--surface-secondary)]

                        text-[var(--primary)]
                        "
                    >
                        <Lock size={20} />
                    </div>

                    <div>
                        <h2
                            className="
                            text-lg
                            font-semibold

                            text-[var(--foreground)]
                            "
                        >
                            Change Password
                        </h2>

                        <p
                            className="
                            mt-1
                            text-sm

                            text-[var(--foreground-secondary)]
                            "
                        >
                            Update your password to keep your
                            account secure.
                        </p>
                    </div>
                </div>

                <FormSection>
                    <FormField label="Current Password">
                        <TextInput
                            type="password"
                            placeholder="Enter current password"
                        />
                    </FormField>

                    <FormField label="New Password">
                        <TextInput
                            type="password"
                            placeholder="Enter new password"
                        />
                    </FormField>

                    <FormField label="Confirm Password">
                        <TextInput
                            type="password"
                            placeholder="Confirm new password"
                        />
                    </FormField>

                    <Button>
                        Save Changes
                    </Button>
                </FormSection>
            </Card>

            <Card
                className="
                mt-6

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
                        <h2
                            className="
                            text-base
                            font-semibold

                            text-[var(--danger)]
                            "
                        >
                            Delete Account
                        </h2>

                        <p
                            className="
                            mt-1

                            text-sm
                            leading-6

                            text-[var(--foreground-secondary)]
                            "
                        >
                            Permanently delete your account,
                            journeys, memories, and all
                            associated data. This action
                            cannot be undone.
                        </p>
                    </div>
                </div>

                <div className="mt-6">
                    <Button
                        variant="danger"
                        onClick={() =>
                            setDeleteDialogOpen(true)
                        }
                    >
                        Delete Account
                    </Button>
                </div>
            </Card>

            <ActionConfirmationDialog
                open={deleteDialogOpen}
                icon={<Trash2 size={28} />}
                title="Delete Account?"
                description="This will permanently delete your account, journeys, memories, and all associated data. This action cannot be undone."
                confirmText="Delete Account"
                destructive
                onCancel={() =>
                    setDeleteDialogOpen(false)
                }
                onConfirm={
                    handleDeleteAccount
                }
            />
        </>
    );
}