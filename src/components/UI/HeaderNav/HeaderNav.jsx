import { a, style } from 'motion/react-client'
import styles from './HeaderNav.module.css'

function HeaderNav({href, text, isActive}) {
  return (
        <a href={href} className={styles["nav"] + " " + (isActive == true ? styles["active"] : isActive )}>{text}</a>
  )
}

export default HeaderNav
