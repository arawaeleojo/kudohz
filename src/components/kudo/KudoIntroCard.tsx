import { Flame } from "lucide-react";

export default function KudoIntroCard() {
    return (
        <div
            className="
            flex
            flex-col
            items-center
            text-center
            pt-2
            pb-6
            "
        >
            <div
                className="
                w-20
                h-20
                rounded-full
                bg-[#F1ECE3]
                flex
                items-center
                justify-center
                mb-4
                "
            >
                <Flame
                    size={36}
                    color="#0E5A64"
                    strokeWidth={2.5}
                />
            </div>

            <h2
                className="
                text-2xl
                font-bold
                text-[#111827]
                "
            >
                Hi, I'm Kudo.
            </h2>

            <p
                className="
                mt-1
                text-sm
                text-[#6B7280]
                "
            >
                Your accountability coach.
            </p>
        </div>
    );
}