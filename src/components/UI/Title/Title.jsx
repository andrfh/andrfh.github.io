import { div } from 'framer-motion/client'
import styles from './Title.module.css'

const Title = ({ text, subtitle }) => {
  return (
    <div className={styles["title"]}  data-aos="zoom-in" data-aos-duration="1000">
        <h2>{text}</h2>
        <h5>{subtitle}</h5>
      </div>
  )
}

export default Title