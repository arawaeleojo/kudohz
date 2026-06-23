interface MessageBubbleProps {
    role: "kudo" | "user";
    content: string;
}

export default function MessageBubble({
    role,
    content,
}: MessageBubbleProps) {
    const isUser = role === "user";

    return (
        <div
            className={`
            flex
            ${isUser ? "justify-end" : "justify-start"}
            `}
        >
            <div
                className={`
                max-w-[80%]
                px-4
                py-3
                rounded-2xl
                text-sm
                leading-6

                ${isUser
                        ? "bg-[#0E5A64] text-white"
                        : "bg-[#F1ECE3] text-[#111827]"
                    }
                `}
            >
                {content}
            </div>
        </div>
    );
}