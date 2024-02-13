
import styles from './Hero.module.css'
import Link from 'next/link'

function Hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.imageContainer}>
          <img className={styles.heroImage} src={'/images/hero.jpeg'} alt="" />
          
        </div>
        <div className={styles.container}>
          <h1 className={styles.title} style={{fontFamily: 'parisienne'}}>Amanda & Quentin</h1>
          <h3 className={styles.subTitle} style={{fontFamily: 'parisienne'}} >Samedi 12 Octobre 2024</h3>
          <h4 className={styles.subTitle} style={{fontFamily: 'parisienne'}}>A 16 heures</h4>
          <div className={styles.linkCta}>
          <Link href={'/rsvp'}>
            <div className={styles.rsvpButton}>
              <h4>RSVP</h4>
            </div>
          </Link>
          </div>
        </div>
        
       
    </div>
  )
}

export default Hero