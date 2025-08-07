import { motion } from 'framer-motion'
import './StarsBg.css'
import { useMemo } from 'react'

const StarsBg = ({ numStars }) => {
  const stars = useMemo(() => {
    return Array.from({ length: numStars }).map((_, i) => {
      const top = `${Math.random() * 100}%`
      const left = `${Math.random() * 100}%`
      const size = Math.random() * 3 + 1
      const delay = Math.random() * 2

      return (
        <motion.div
          key={i}
          className="star"
          style={{
            top,
            left,
            width: `${size}px`,
            height: `${size}px`,
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay,
            ease: 'easeInOut',
          }}
        />
      )
    })
  }, [numStars])  // ← только при изменении numStars

  return (
    <motion.div
      className="stars-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {stars}
    </motion.div>
  )
}

export default StarsBg
