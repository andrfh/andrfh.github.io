import styles from './MainBtn.module.css'

function MainBtn({href, text, style, onClick}) {
  return (
    <span className={styles["border"]}>
      {onClick ? (
        <button type="button" onClick={onClick} className={styles[style]}>{text}</button>
      ) : (
        <a href={href} className={styles[style]}>{text}</a>
      )}
    </span>
  )
}

export default MainBtn
