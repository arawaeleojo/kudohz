"use client";

import { motion } from "framer-motion";

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
            {messages.map(
                (message, index) => (
                    <motion.div
                        key={message.id}
                        initial={{
                            opacity: 0,
                            y: 14,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.35,
                            delay:
                                index * 0.18,
                        }}
                    >
                        <MessageBubble
                            role={
                                message.role
                            }
                            content={
                                message.content
                            }
                        />
                    </motion.div>
                )
            )}
        </div>
    );
}