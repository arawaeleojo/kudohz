import AppShell from "@/components/layout/AppShell";
import PageHeader from "@/components/ui/PageHeader";

import KudoIntroCard from "@/components/kudo/KudoIntroCard";
import ConversationList from "@/components/kudo/ConversationList";
import ChatInput from "@/components/kudo/ChatInput";

export default function KudoPage() {
    return (
        <AppShell>
            <PageHeader title="Kudo" />

            <KudoIntroCard />

            <ConversationList />

            <ChatInput />
        </AppShell>
    );
}