import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import "./StarsBg.css";

const StarsBg = ({ numStars }) => {
  const stars = useMemo(() => {
    return Array.from({ length: numStars }).map((_, i) => {
      return {
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 2,
      };
    });
  }, [numStars]);

  return (
    <motion.div
      className="stars-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 4, delay: s.delay, ease: "easeInOut" }}
        />
      ))}
    </motion.div>
  );
};

export default StarsBg;
