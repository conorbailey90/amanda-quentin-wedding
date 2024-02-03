import styles from './Details.module.css'

function Details() {
  return (
    <div className={styles.details} id='details'>
        <div className={styles.container}>
            <div className={styles.ceremony}>
              <h2 style={{fontFamily: 'parisienne', fontSize: '2rem', marginBottom: '1rem'}}>La Cérémonie</h2>
              <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13225.546725933416!2d-0.992350387194438!3d43.61965410874274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd56bb5b8f1ed047%3A0x735bbc4626414258!2sChateau%20Saint%20Martin!5e0!3m2!1sen!2suk!4v1706451519887!5m2!1sen!2suk" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
    </div>
  )
}

export default Details