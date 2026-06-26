"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding");
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      className="
            relative
            min-h-dvh
            w-full
            max-w-sm
            mx-auto
            flex
            items-center
            justify-center
            bg-[#F7F3EC]
            overflow-hidden
            "
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
                absolute
                inset-0
                flex
                flex-col
                items-center
                justify-center
                "
      >
        <motion.div
          initial={{
            scale: 0.9,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="
                    absolute
                    inset-0
                    "
        >
          <Image
            src="/images/kudohzsplash.png"
            alt="Kudohz Splash"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}