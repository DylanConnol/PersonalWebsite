import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const AnimatedPage = (props) => {
    const exitdirection = props.exitdirection;
  return (
    <motion.div
              initial={{ x: 1050, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.75
              }}
              exit={{ x: exitdirection * 1050, opacity: 0 }}
            >
      {props.children}
    </motion.div>
  );
};

export default AnimatedPage;
