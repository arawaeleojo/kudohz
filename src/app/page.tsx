"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      className="
            min-h-dvh
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
                flex
                flex-col
                items-center
                "
      >
        <motion.div
          initial={{
            rotate: -10,
          }}
          animate={{
            rotate: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="
                    w-28
                    h-28
                    rounded-full
                    bg-[#0E5A64]
                    flex
                    items-center
                    justify-center
                    shadow-[0_8px_30px_rgba(14,90,100,0.25)]
                    "
        >
          <Leaf
            size={46}
            color="white"
          />
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.6,
          }}
          className="
                    mt-8
                    text-4xl
                    font-extrabold
                    tracking-tight
                    text-[#111827]
                    "
        >
          Kudohz
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.6,
          }}
          className="
                    mt-3
                    text-[#6B7280]
                    text-base
                    "
        >
          Keep becoming.
        </motion.p>
      </motion.div>
    </main>
  );
}