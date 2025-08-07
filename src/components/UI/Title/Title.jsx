import styles from './Title.module.css'

const Title = ({ text }) => {
  return (
    <div className={styles["title_wrapper"]}>
      <h2 className={styles["title"]}>{text}</h2>
    </div>
  )
}

export default Title