"use client";

import { motion } from "framer-motion";

export default function Title(): JSX.Element {
    return (
        <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            Welcome to the Hero Section
        </motion.h2>
    );
}
