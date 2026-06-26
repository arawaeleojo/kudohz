import {
    Image,
    Link2,
    FileText,
} from "lucide-react";

import AttachmentButton from "./AttachmentButton";

export default function AttachmentSection() {
    return (
        <div>
            <div className="mb-4">
                {/* <h3
                    className="
                    text-sm
                    font-semibold

                    text-[var(--foreground)]
                    "
                >
                    Attachments
                </h3> */}

                <p
                    className="
                    mt-1

                    text-xs
                    leading-6

                    text-[var(--foreground-secondary)]
                    "
                >
                    Optional. Add a photo,
                    link or file to support
                    this memory.
                </p>
            </div>

            <div
                className="
                flex
                flex-wrap
                gap-3
                "
            >
                <AttachmentButton
                    label="Photo"
                    icon={Image}
                />

                <AttachmentButton
                    label="Link"
                    icon={Link2}
                />

                <AttachmentButton
                    label="File"
                    icon={FileText}
                />
            </div>
        </div>
    );
}