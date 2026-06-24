"use client";

import { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    Bug,
} from "lucide-react";

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
            "How do memories and Kudo help me grow?",
        answer:
            "Memories help you capture meaningful moments, lessons, and milestones along your journey. Kudo helps you reflect on those experiences, stay accountable, and keep moving forward when motivation fades.",
    },
];

export default function HelpSupport() {
    const [openIndex, setOpenIndex] =
        useState<number | null>(0);

    return (
        <div className="space-y-6">
            <div
                className="
                rounded-3xl
                border
                border-[#E8E1D7]
                overflow-hidden
                "
            >
                <div
                    className="
                    px-5
                    py-4
                    border-b
                    border-[#F3EEE7]
                    "
                >
                    <h2
                        className="
                        text-base
                        font-semibold
                        text-[#111827]
                        "
                    >
                        Frequently Asked Questions
                    </h2>
                </div>

                {faqs.map((faq, index) => (
                    <div
                        key={faq.question}
                        className="
                        border-b
                        border-[#F3EEE7]
                        last:border-b-0
                        "
                    >
                        <button
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
                            "
                        >
                            <span
                                className="
                                text-sm
                                font-medium
                                text-[#111827]
                                pr-4
                                "
                            >
                                {faq.question}
                            </span>

                            {openIndex === index ? (
                                <ChevronUp
                                    size={18}
                                    color="#6B7280"
                                />
                            ) : (
                                <ChevronDown
                                    size={18}
                                    color="#6B7280"
                                />
                            )}
                        </button>

                        {openIndex === index && (
                            <div
                                className="
                                px-5
                                pb-4
                                "
                            >
                                <p
                                    className="
                                    text-sm
                                    leading-7
                                    text-[#6B7280]
                                    "
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div
                className="
                rounded-3xl
                border
                border-[#E8E1D7]
                p-5
                "
            >
                <h3
                    className="
                    text-base
                    font-semibold
                    text-[#111827]
                    "
                >
                    Need Help?
                </h3>

                <p
                    className="
                    mt-3
                    text-sm
                    leading-6
                    text-[#6B7280]
                    "
                >
                    If you have questions, feedback, or
                    encounter any issues while using
                    Kudohz, we're here to help.
                </p>

                <p
                    className="
                    mt-4
                    text-sm
                    font-medium
                    text-[#0E5A64]
                    "
                >
                    support@kudohz.com
                </p>
            </div>

            <button
                className="
                w-full
                rounded-3xl
                border
                border-[#FDE2E2]
                p-5
                flex
                items-center
                justify-center
                gap-2
                text-[#DC2626]
                font-medium
                "
            >
                <Bug size={18} />

                Report a Bug
            </button>
        </div>
    );
}