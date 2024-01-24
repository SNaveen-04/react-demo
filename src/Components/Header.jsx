import styles from '../styles/app.module.css'
const Header = (props) => {
  return (
    <header className={styles.header}>
    <h3>
      {props.data}
    </h3>
    </header>
  )
}

export default Header