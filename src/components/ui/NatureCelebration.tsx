"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NatureCelebrationProps {
    show: boolean;
}

interface Particle {
    id: number;
    symbol: string;
    left: number;
    size: number;
    drift: number;
    rotate: number;
    duration: number;
    delay: number;
}

export default function NatureCelebration({
    show,
}: NatureCelebrationProps) {
    const [particles, setParticles] =
        useState<Particle[]>([]);

    useEffect(() => {
        if (!show) return;

        setParticles(
            Array.from({ length: 16 }).map(
                (_, index) => ({
                    id:
                        index +
                        Date.now(),
                    symbol:
                        Math.random() > 0.5
                            ? "🍃"
                            : "🌸",
                    left:
                        Math.random() * 100,
                    size:
                        24 +
                        Math.random() * 12,
                    drift:
                        (Math.random() -
                            0.5) *
                        180,
                    rotate:
                        Math.random() *
                        720,
                    duration:
                        2.8 +
                        Math.random(),
                    delay:
                        Math.random() *
                        0.5,
                })
            )
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
                                "
                                style={{
                                    left: `${particle.left}%`,
                                    fontSize:
                                        particle.size,
                                }}
                                initial={{
                                    y: "-10vh",
                                    opacity: 0,
                                    rotate: 0,
                                    x: 0,
                                }}
                                animate={{
                                    y: "110vh",
                                    opacity: [
                                        0,
                                        1,
                                        1,
                                        0,
                                    ],
                                    x: [
                                        0,
                                        particle.drift /
                                        2,
                                        particle.drift,
                                    ],
                                    rotate:
                                        particle.rotate,
                                }}
                                exit={{
                                    opacity: 0,
                                }}
                                transition={{
                                    duration:
                                        particle.duration,
                                    delay:
                                        particle.delay,
                                    ease: "easeInOut",
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