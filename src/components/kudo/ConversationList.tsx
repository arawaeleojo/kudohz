import MessageBubble from "./MessageBubble";

interface Message {
    id: string;
    role: "kudo" | "user";
    content: string;
}

const messages: Message[] = [
    {
        id: "1",
        role: "kudo",
        content:
            "I'm here to help you stay aligned with who you're becoming.",
    },
    {
        id: "2",
        role: "kudo",
        content:
            "What are you working on today?",
    },
    {
        id: "3",
        role: "kudo",
        content:
            "Let's make today meaningful.",
    },
];

export default function ConversationList() {
    return (
        <div
            className="
                mt-6
                space-y-4
                pb-32
                "
        >
            {messages.map((message) => (
                <MessageBubble
                    key={message.id}
                    role={message.role}
                    content={message.content}
                />
            ))}
        </div>
    );
}