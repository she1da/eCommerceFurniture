"use client";

import { motion, Variants, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface DivProps extends MotionProps {
    children: ReactNode;
    hidden?: Variants;
    visible?: Variants;
}

export default function Div({
    initial,
    animate,
    hidden,
    visible = {
        transition: {
            staggerChildren: 0.2,
        },
    },
    children,
}: DivProps) {
    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={initial}
            animate={animate}
            variants={visible}
        >
            {children}
        </motion.div>
    );
}
