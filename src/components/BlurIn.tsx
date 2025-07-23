"use client";
import { motion, useInView } from "framer-motion";
import * as React from "react";

export const BlurIn = ({
    children,
    className,
    duration,
}: {
    children: React.ReactNode;
    className?: string;
    duration?: number;
}) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
            transition={{ duration: duration || 0.5, ease: "easeInOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
