"use client";

import { useState } from "react";

import AppShell from "@/components/layout/AppShell";
import PageHeader from "@/components/ui/PageHeader";

import JourneyTabs from "@/components/journeys/JourneyTabs";
import JourneyList from "@/components/journeys/JourneyList";

export default function JourneysPage() {
    const [selectedTab, setSelectedTab] =
        useState("active");

    return (
        <AppShell>
            <PageHeader title="Journeys" />

            <JourneyTabs
                selectedTab={selectedTab}
                onChange={setSelectedTab}
            />

            <JourneyList
                selectedTab={selectedTab}
            />
        </AppShell>
    );
}