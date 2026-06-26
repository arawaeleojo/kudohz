"use client";

import { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    Bug,
    Mail,
} from "lucide-react";

import Card from "@/components/ui/Card";

const faqs = [
    {
        question:
            "Why doesn't Kudohz use streaks?",
        answer:
            "Kudohz focuses on long-term growth rather than maintaining perfect streaks. Missing a day doesn't erase your progress. What matters is consistently returning to the person you want to become.",
    },
    {
        question:
            "What are identities and how should I choose them?",
        answer:
            "Identities represent the kind of person you want to become, such as Writer, Athlete, Reader, or Designer. Choose identities that reflect who you want to be, not just what you want to achieve.",
    },
    {
        question:
            "How is Kudohz different from a habit tracker?",
        answer:
            "Most habit trackers focus on completing tasks. Kudohz focuses on identity transformation. Instead of asking what you did today, Kudohz asks who you are becoming over time.",
    },
    {
        question:
            "Why can I only focus on a few identities?",
        answer:
            "Growth requires focus. Limiting the number of active identities helps prevent overwhelm and encourages deeper progress in the areas that matter most to you.",
    },
    {
        question:
            "How do Memories and Kudo help me grow?",
        answer:
            "Memories capture meaningful moments and lessons along your journey, while Kudo helps you reflect on those experiences and stay accountable to the person you're becoming.",
    },
];

export default function HelpSupport() {
    const [openIndex, setOpenIndex] =
        useState<number | null>(0);

    return (
        <div className="space-y-6">
            <Card className="overflow-hidden p-0">
                <div
                    className="
                    border-b
                    border-[var(--border)]
                    px-5
                    py-4
                    "
                >
                    <h2
                        className="
                        text-base
                        font-semibold
                        text-[var(--foreground)]
                        "
                    >
                        Frequently Asked Questions
                    </h2>

                    <p
                        className="
                        mt-1
                        text-sm
                        text-[var(--foreground-secondary)]
                        "
                    >
                        Answers to common questions
                        about Kudohz.
                    </p>
                </div>

                {faqs.map((faq, index) => (
                    <div
                        key={faq.question}
                        className="border-b last:border-b-0 border-[var(--border)]"
                    >
                        <button
                            type="button"
                            onClick={() =>
                                setOpenIndex(
                                    openIndex === index
                                        ? null
                                        : index
                                )
                            }
                            className="
                            w-full
                            flex
                            items-center
                            justify-between
                            px-5
                            py-4
                            text-left
                            transition-colors
                            hover:bg-[var(--surface-secondary)]
                            "
                        >
                            <span
                                className="
                                pr-4
                                text-sm
                                font-medium
                                text-[var(--foreground)]
                                "
                            >
                                {faq.question}
                            </span>

                            {openIndex === index ? (
                                <ChevronUp
                                    size={18}
                                    className="text-[var(--foreground-secondary)]"
                                />
                            ) : (
                                <ChevronDown
                                    size={18}
                                    className="text-[var(--foreground-secondary)]"
                                />
                            )}
                        </button>

                        {openIndex === index && (
                            <div className="px-5 pb-5">
                                <p
                                    className="
                                    text-sm
                                    leading-7
                                    text-[var(--foreground-secondary)]
                                    "
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </Card>

            <Card className="p-5">
                <div className="flex items-center gap-3">
                    <div
                        className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-[var(--surface-secondary)]
                        text-[var(--primary)]
                        "
                    >
                        <Mail size={18} />
                    </div>

                    <div>
                        <h3
                            className="
                            text-base
                            font-semibold
                            text-[var(--foreground)]
                            "
                        >
                            Need Help?
                        </h3>

                        <p
                            className="
                            mt-1
                            text-sm
                            text-[var(--foreground-secondary)]
                            "
                        >
                            We're always happy to help.
                        </p>
                    </div>
                </div>

                <div
                    className="
                    mt-5
                    rounded-2xl
                    bg-[var(--surface-secondary)]
                    px-4
                    py-4
                    "
                >
                    <p
                        className="
                        text-xs
                        text-[var(--foreground-secondary)]
                        "
                    >
                        Email us
                    </p>

                    <p
                        className="
                        mt-1
                        text-sm
                        font-semibold
                        text-[var(--primary)]
                        "
                    >
                        support@kudohz.com
                    </p>
                </div>
            </Card>

            <Card className="overflow-hidden p-0">
                <button
                    type="button"
                    className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-3
                    px-5
                    py-4
                    font-medium
                    text-[var(--danger)]
                    transition-colors
                    hover:bg-red-500/5
                    active:scale-[0.99]
                    "
                >
                    <Bug size={18} />

                    Report a Bug
                </button>
            </Card>
        </div>
    );
}