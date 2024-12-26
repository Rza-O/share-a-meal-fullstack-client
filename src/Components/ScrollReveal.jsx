import { motion } from "framer-motion";

const ScrollReveal = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
    >
        {children}
    </motion.div>
);
export default ScrollReveal;