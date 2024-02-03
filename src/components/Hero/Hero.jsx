import Image from 'next/image'
import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.imageContainer}>
          <img className={styles.heroImage} src={'/images/hero.jpeg'} alt="" />
        {/* <Image className={styles.heroImage} src={'/images/hero.jpeg'} fill alt='hero-image' /> */}

        </div>
        <div className={styles.container}>
          <h1 className={styles.title} style={{fontFamily: 'parisienne'}}>Amanda & Quentin</h1>
          <h3 className={styles.subTitle} style={{fontFamily: 'parisienne'}} >Samedi 12 Octobre 2024</h3>
          <h4 className={styles.subTitle} style={{fontFamily: 'parisienne'}}>A 16 heures</h4>
        </div>
    </div>
  )
}

export default Hero