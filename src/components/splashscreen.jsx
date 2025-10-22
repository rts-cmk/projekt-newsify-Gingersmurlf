import { motion } from "motion/react";
import { useNavigate } from "react-router";

export default function Splash() {
  const navigate = useNavigate();
  const isFirstVisit = !localStorage.getItem("visited")

  return (
    <motion.div
      className="motion__wrapper"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        transition: { delay: 2.3, duration: 0.5 },
      }}
    >
      <motion.img
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1.5,
          opacity: 1,
          rotate: 360,
          transition: { duration: 2 },
        }}
        src="../projekt-ui/screens/newsify_logo_1.svg"
        alt=""
        className="motion__logo"
      />
      <motion.h1
        className="motion__h1"
        initial={{ opacity: 0 }}
        animate={{
          scale: 1.5,
          opacity: 1,
          transition: { duration: 3.5 },
        }}
      >
        Newsify
      </motion.h1>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 3 } }}
        onAnimationComplete={() => navigate("/firsttime")}
      ></motion.div>
    </motion.div>
  );
}
