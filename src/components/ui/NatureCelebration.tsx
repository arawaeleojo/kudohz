"use client";

import {
    AnimatePresence,
    motion,
} from "framer-motion";
import {
    useEffect,
    useState,
} from "react";

interface NatureCelebrationProps {
    show: boolean;
}

interface Particle {
    id: number;
    symbol: string;
    left: number;
    size: number;
    drift: number;
    rotation: number;
    duration: number;
    delay: number;
    opacity: number;
}

const symbols = [
    "🍃",
    "🌿",
    "🌸",
    "🌼",
];

export default function NatureCelebration({
    show,
}: NatureCelebrationProps) {
    const [particles, setParticles] =
        useState<Particle[]>([]);

    useEffect(() => {
        if (!show) return;

        setParticles(
            Array.from({
                length: 18,
            }).map((_, index) => ({
                id:
                    Date.now() +
                    index +
                    Math.random(),

                symbol:
                    symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                    ],

                left:
                    Math.random() * 100,

                size:
                    22 +
                    Math.random() * 16,

                drift:
                    (Math.random() - 0.5) *
                    220,

                rotation:
                    360 +
                    Math.random() * 720,

                duration:
                    2.8 +
                    Math.random() * 1.8,

                delay:
                    Math.random() * 0.45,

                opacity:
                    0.8 +
                    Math.random() * 0.2,
            }))
        );
    }, [show]);

    return (
        <AnimatePresence>
            {show && (
                <div
                    className="
                    pointer-events-none
                    fixed
                    inset-0
                    overflow-hidden
                    z-[99]
                    "
                >
                    {particles.map(
                        (particle) => (
                            <motion.div
                                key={
                                    particle.id
                                }
                                className="
                                absolute
                                select-none
                                will-change-transform
                                "
                                style={{
                                    left: `${particle.left}%`,
                                    fontSize:
                                        particle.size,
                                }}
                                initial={{
                                    y: "-15vh",
                                    x: 0,
                                    rotate: 0,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: "115vh",

                                    x: [
                                        0,
                                        particle.drift *
                                        0.3,
                                        particle.drift *
                                        0.7,
                                        particle.drift,
                                    ],

                                    rotate:
                                        particle.rotation,

                                    opacity: [
                                        0,
                                        particle.opacity,
                                        particle.opacity,
                                        0,
                                    ],
                                }}
                                exit={{
                                    opacity: 0,
                                }}
                                transition={{
                                    duration:
                                        particle.duration,

                                    delay:
                                        particle.delay,

                                    ease:
                                        "easeInOut",
                                }}
                            >
                                {
                                    particle.symbol
                                }
                            </motion.div>
                        )
                    )}
                </div>
            )}
        </AnimatePresence>
    );
}