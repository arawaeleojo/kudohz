"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Dumbbell, PenLine, User, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const onboardingSteps = [
  {
    title: "You choose to grow.",
    subtitle:
      "Kudohz helps you build better habits, stay consistent, and become your best self.",
    image: "/images/onboarding1.png",
  },
  {
    title: "Focus on what matters.",
    subtitle:
      "Set your identities, track your progress, and take meaningful actions every day.",
    image: "/images/onboarding2.png",
  },
  {
    title: "Small actions. Big change.",
    subtitle:
      "Track your journey, celebrate wins, and create a life you're proud of.",
    image: "/images/onboarding3.png",
  },
];

const CONTAINER = 320;
const INNER     = 240;
const ORBIT_R   = 128;
const ICON_SIZE = 46;

const orbitIcons = [
  { Icon: BookOpen, label: "learning",  angleDeg: -90  },
  { Icon: Dumbbell, label: "fitness",   angleDeg: -150 },
  { Icon: User,     label: "identity",  angleDeg: 150  },
  { Icon: Heart,    label: "wellbeing", angleDeg: 90   },
  { Icon: PenLine,  label: "tracking",  angleDeg: -30  },
];

function OrbitIllustration({ src, alt }: { src: string; alt: string }) {
  const cx = CONTAINER / 2;
  const cy = CONTAINER / 2;

  return (
    <div style={{ width: CONTAINER, height: CONTAINER }} className="relative flex-shrink-0">
      <svg
        width={CONTAINER}
        height={CONTAINER}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <circle
          cx={cx}
          cy={cy}
          r={ORBIT_R}
          fill="none"
          stroke="#0F5B5B"
          strokeOpacity={0.25}
          strokeWidth={1.5}
          strokeDasharray="6 5"
        />
      </svg>

      {/* No background color — image fills the circle completely */}
      <div
        className="absolute rounded-full overflow-hidden"
        style={{
          width: INNER,
          height: INNER,
          left: cx - INNER / 2,
          top: cy - INNER / 2,
        }}
      >
        <Image src={src} alt={alt} fill className="object-cover" priority />
      </div>

      {orbitIcons.map(({ Icon, label, angleDeg }) => {
        const rad = (angleDeg * Math.PI) / 180;
        const x = cx + ORBIT_R * Math.cos(rad) - ICON_SIZE / 2;
        const y = cy + ORBIT_R * Math.sin(rad) - ICON_SIZE / 2;
        return (
          <div
            key={label}
            aria-label={label}
            className="absolute rounded-full bg-white flex items-center justify-center shadow-sm border border-[#0F5B5B]/15"
            style={{ width: ICON_SIZE, height: ICON_SIZE, left: x, top: y }}
          >
            <Icon size={20} className="text-[#0F5B5B]" strokeWidth={1.75} />
          </div>
        );
      })}
    </div>
  );
}

function PlainIllustration({ src, alt }: { src: string; alt: string }) {
  return (
    // No background color — image fills completely, no white ring
    <div
      className="relative rounded-full overflow-hidden flex-shrink-0"
      style={{ width: CONTAINER, height: CONTAINER }}
    >
      <Image src={src} alt={alt} fill className="object-cover" priority />
    </div>
  );
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    } else {
      router.push("/onboarding/login");
    }
  };

  const handleSkip = () => {
    router.push("/onboarding/login");
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1, zIndex: 1 },
    exit:  (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0, zIndex: 0 }),
  };

  const step = onboardingSteps[currentStep];

  return (
    <main className="min-h-dvh w-full max-w-sm mx-auto flex flex-col bg-[#F7F3EC] overflow-hidden">

      {/* Skip — in flow but minimal height, just text aligned right */}
      <div className="flex justify-end px-6 pt-5 pb-0">
        <button
          onClick={handleSkip}
          className="text-[#111827] font-medium text-sm hover:opacity-60 transition-opacity"
        >
          Skip
        </button>
      </div>

      {/* Content — fills remaining space and centres */}
      <div className="flex-1 flex flex-col items-center justify-center w-full px-6">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="flex flex-col items-center w-full"
          >
            {currentStep === 1 ? (
              <OrbitIllustration src={step.image} alt="Focus illustration" />
            ) : (
              <PlainIllustration
                src={step.image}
                alt={currentStep === 0 ? "Growth illustration" : "Journey illustration"}
              />
            )}

            <div className="mt-10 text-center max-w-xs">
              <h1 className="text-[26px] font-bold text-[#111827] tracking-tight leading-tight">
                {step.title}
              </h1>
              <p className="mt-3 text-[#6B7280] text-[15px] leading-relaxed">
                {step.subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="flex items-center px-6 pb-12 pt-4 w-full">
        <div className="flex-1" />

        <div className="flex items-center gap-[10px] flex-1 justify-center">
          {onboardingSteps.map((_, i) => (
            <div
              key={i}
              className={`w-[9px] h-[9px] rounded-full transition-colors duration-300 ${
                currentStep === i ? "bg-[#0F5B5B]" : "bg-[#D1D5DB]"
              }`}
            />
          ))}
        </div>

        <div className="flex-1 flex justify-end">
          <button
            onClick={handleNext}
            aria-label={currentStep === onboardingSteps.length - 1 ? "Get started" : "Next"}
            className="w-14 h-14 rounded-full bg-[#0F5B5B] flex items-center justify-center text-white hover:opacity-90 active:scale-95 transition-all shadow-md"
          >
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </main>
  );
}