"use client";

import { ReactNode } from "react";

import Card from "./Card";
import SectionHeader from "./SectionHeader";

interface CardSectionProps {
    title: string;
    subtitle?: string;
    actionText?: string;
    onAction?: () => void;
    children: ReactNode;
}

export default function CardSection({
    title,
    subtitle,
    actionText,
    onAction,
    children,
}: CardSectionProps) {
    return (
        <Card className="p-5">
            <SectionHeader
                title={title}
                subtitle={subtitle}
                actionText={actionText}
                onAction={onAction}
            />

            <div className="mt-4">
                {children}
            </div>
        </Card>
    );
}