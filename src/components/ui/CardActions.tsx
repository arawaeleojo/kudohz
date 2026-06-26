"use client";

import {
    Pencil,
    Trash2,
} from "lucide-react";

import IconButton from "./IconButton";

interface CardActionsProps {
    onEdit: () => void;
    onDelete: () => void;
}

export default function CardActions({
    onEdit,
    onDelete,
}: CardActionsProps) {
    return (
        <div
            className="
            flex
            items-center
            gap-1
            "
        >
            <IconButton
                size="sm"
                onClick={onEdit}
            >
                <Pencil size={16} />
            </IconButton>

            <IconButton
                size="sm"
                variant="danger"
                onClick={onDelete}
            >
                <Trash2 size={16} />
            </IconButton>
        </div>
    );
}