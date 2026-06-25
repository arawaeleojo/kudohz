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
                text-base
                font-semibold
                text-[#111827]
                mb-4
                "
            >
                Attachment Type
            </h2>

            <div className="flex flex-wrap gap-3">
                {attachments.map(
                    (attachment) => (
                        <button
                            key={attachment}
                            onClick={() =>
                                toggleAttachment(
                                    attachment
                                )
                            }
                            className={`
                                rounded-full
                                px-4
                                py-2.5
                                text-sm
                                font-medium
                                transition-colors
                                ${selectedAttachments.includes(
                                attachment
                            )
                                    ? "bg-[#0E5A64] text-white"
                                    : "bg-[#EFE8DE] border border-[#E2DBCF] text-[#374151]"
                                }
                            `}
                        >
                            {attachment}
                        </button>
                    )
                )}
            </div>
        </div>
    );
}