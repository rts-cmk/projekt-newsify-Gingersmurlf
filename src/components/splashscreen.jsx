import { motion } from "motion/react";

export default function Splash() {
  return (
    <motion.div className="motion__wrapper"
    initial={{ opacity: 0 }}
    animate={{
        opacity: 1,
        scale: 2,
        transition: { duration: 2.5 }
    }}
    >
      <motion.img
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          rotate: 360,
          transition: { duration: 2.5 },
        }}
        src="../projekt-ui/screens/newsify_logo_1.svg"
        alt=""
        className="motion__logo"
      />
      <motion.h1 className="motion__h1"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: { duration: 4 }
    }}
      >Newsify</motion.h1>
    </motion.div>
  );
}
