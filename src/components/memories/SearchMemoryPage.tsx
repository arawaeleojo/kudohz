"use client";

import { useState } from "react";

import SettingsHeader from "@/components/profile/SettingsHeader";

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const memories = [
    {
        image: "https://picsum.photos/200?1",
        title: "Finished Chapter One",
        preview:
            "Finally completed the opening chapter after weeks of planning.",
        date: "20 Jul",
        journey: "Writer",
    },
    {
        image: "https://picsum.photos/200?2",
        title: "Published My First Article",
        preview:
            "Shared my thoughts online for the first time.",
        date: "18 Jun",
        journey: "Writer",
    },
    {
        image: "https://picsum.photos/200?3",
        title: "Completed Landing Page",
        preview:
            "Wrapped up the homepage redesign for Kudohz.",
        date: "16 Jul",
        journey: "Designer",
    },
    {
        image: "https://picsum.photos/200?4",
        title: "Created New Logo Concepts",
        preview:
            "Explored three directions for a client's branding.",
        date: "10 Jun",
        journey: "Designer",
    },
    {
        image: "https://picsum.photos/200?5",
        title: "Ran My First 10 km",
        preview:
            "Reached a distance I've never completed before.",
        date: "8 Jul",
        journey: "Athlete",
    },
];

export default function SearchMemoryPage() {
    const [query, setQuery] =
        useState("");

    const results = memories.filter(
        (memory) =>
            memory.title
                .toLowerCase()
                .includes(
                    query.toLowerCase()
                ) ||
            memory.preview
                .toLowerCase()
                .includes(
                    query.toLowerCase()
                ) ||
            memory.journey
                .toLowerCase()
                .includes(
                    query.toLowerCase()
                )
    );

    return (
        <div className="space-y-6">
            <SettingsHeader
                title="Search Memories"
            />

            <SearchBar
                value={query}
                onChange={setQuery}
            />

            <SearchResults
                results={results}
                query={query}
            />
        </div>
    );
}