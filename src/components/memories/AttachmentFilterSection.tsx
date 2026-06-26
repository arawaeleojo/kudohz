"use client";

import { useState } from "react";

const attachments = [
    "Photos",
    "Links",
    "Files",
    "Text Only",
];

export default function AttachmentFilterSection() {
    const [
        selectedAttachments,
        setSelectedAttachments,
    ] = useState<string[]>([]);

    function toggleAttachment(
        attachment: string
    ) {
        setSelectedAttachments(
            (previous) =>
                previous.includes(
                    attachment
                )
                    ? previous.filter(
                        (item) =>
                            item !==
                            attachment
                    )
                    : [
                        ...previous,
                        attachment,
                    ]
        );
    }

    return (
        <div>
            <h2
                className="
                mb-4

                text-base
                font-semibold

                text-[var(--foreground)]
                "
            >
                Attachment Type
            </h2>

            <div
                className="
                flex
                flex-wrap
                gap-3
                "
            >
                {attachments.map(
                    (
                        attachment
                    ) => {
                        const active =
                            selectedAttachments.includes(
                                attachment
                            );

                        return (
                            <button
                                key={
                                    attachment
                                }
                                onClick={() =>
                                    toggleAttachment(
                                        attachment
                                    )
                                }
                                className={`
                                    rounded-full

                                    border

                                    px-4
                                    py-2.5

                                    text-sm
                                    font-medium

                                    transition-all
                                    duration-200

                                    active:scale-95

                                    ${active
                                        ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-sm"
                                        : "border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--foreground)]"
                                    }
                                `}
                            >
                                {
                                    attachment
                                }
                            </button>
                        );
                    }
                )}
            </div>
        </div>
    );
}