import styles from './Footer.module.css'
function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <h2 style={{fontFamily: 'parisienne', color: '#edcbb4'}}>Amanda & Quentin</h2>
        </div>
    </div>
  )
}

export default Footer