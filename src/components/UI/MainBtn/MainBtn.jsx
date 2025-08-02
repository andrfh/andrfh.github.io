import styles from './MainBtn.module.css'

function MainBtn({href, text, style}) {
  return (
    <span className={styles["border"]}>
        <a href={href} className={styles[style]}>{text}</a>
    </span>
  )
}

export default MainBtn
