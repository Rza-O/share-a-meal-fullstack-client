import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransitionWrapper = ({ children }) => {
    const location = useLocation();
    return (
        <AnimatePresence mode="popLayout">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 1, x: 50 }}
                animate={{ opacity: 1, x: 0  }}
                exit={{ opacity: 0, x: -50  }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};
export default PageTransitionWrapper;