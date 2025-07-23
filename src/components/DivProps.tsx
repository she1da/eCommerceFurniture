"use client";
import React, { useRef } from "react";

import { motion, Variants, MotionProps, useInView } from "framer-motion";
import { ReactNode } from "react";

interface DivProps extends MotionProps {
    children: ReactNode;
    hidden?: Variants;
    visible?: Variants;
}

export default function ContainerMotion({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            className="text-2xl font-bold mb-6 text-center"
        >
            text
            {children}
        </motion.div>
    );
}
