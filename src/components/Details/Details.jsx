import Image from 'next/image'
import styles from './Details.module.css'
import Link from 'next/link'
import { Timeline } from '../export'

function Details() {
  return (
    <div className={styles.details} id='details'>
        <div className={styles.container}>

            <div className={styles.ceremony}>
              <h2 style={{fontFamily: 'parisienne', fontSize: '2rem', marginBottom: '1rem'}}>La Cérémonie</h2>
              <div>
                <h3>Château Saint-Martin</h3>
                <p>356 route de Mimbaste - 40350 Pouillon</p>
                <Link target='_blank' href={'https://en.chateausaintmartin-landes.fr/'}>
                  <p style={{margin: '1rem 0'}}>Le Site</p>
                </Link>
        
              </div>
              <div className={styles.imageSection}>
                <div className={`${styles.imageContainer} ${styles.imageContainerOne}` }>
                  <Image className={styles.image} alt='chateau' src={'/images/c1.jpeg'} fill></Image>
                </div>
                <div className={`${styles.imageContainer} ${styles.imageContainerTwo}`}>
                  <Image className={styles.image} alt='chateau' src={'/images/c2.jpeg'} fill></Image>
                </div>
                <div className={`${styles.imageContainer} ${styles.imageContainerThree}` }>
                  <Image className={styles.image} alt='chateau' src={'/images/c3.jpeg'} fill></Image>
                </div>
              </div>
              
              <Timeline />
             
              <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13225.546725933416!2d-0.992350387194438!3d43.61965410874274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd56bb5b8f1ed047%3A0x735bbc4626414258!2sChateau%20Saint%20Martin!5e0!3m2!1sen!2suk!4v1706451519887!5m2!1sen!2suk" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
    </div>
  )
}

export default Details