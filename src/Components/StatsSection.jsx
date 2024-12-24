import React from "react";
import { motion } from "framer-motion";
import NumberTicker from "./ui/number-ticker";


const StatsSection = () => {
    const stats = [
        { value: 70, suffix: "%", label: "Reduction in Food Waste" },
        { value: 10000, suffix: "+", label: "Meals Donated Monthly" },
        { value: 500, suffix: "+", label: "Active Contributors" },
    ];

    return (
        <section className="py-12 bg-accent">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-lobster font-medium text-green-800 mb-4">
                    Make an Impact with Your Actions
                </h2>
                <motion.div
                    className="flex justify-center space-x-12 mt-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
                    }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <h3 className="text-2xl font-lobster md:text-4xl font-bold text-gray-800">
                                <NumberTicker value={stat.value} duration={2}  />{stat.suffix}
                            </h3>
                            <p className="mt-2 text-gray-500">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;