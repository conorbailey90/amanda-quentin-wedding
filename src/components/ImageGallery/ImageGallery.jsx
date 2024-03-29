import styles from './imageGallery.module.css'
import Image from 'next/image'
function ImageGallery() {
  return (
    <div className={styles.imageGallery}>
        <div className={styles.container}>
          <div className={styles.carousel}>
            <div className={styles.carouselInner}>
                
              <div className={styles.imageContainer} style={{width: '12.5%'}}>
                  <Image className={styles.image}  alt='amanda and quentin' src={'/images/amandaquentin1.jpeg'} fill></Image>
              </div>
              <div className={styles.imageContainer} style={{width: '10%'}} >
                  <img className={styles.image} alt='amanda and quentin' src={'/images/amandaquentin2.jpeg'} />
              </div>
              <div className={styles.imageContainer} style={{width: '12.5%'}} >
                  <img className={styles.image} alt='amanda and quentin' src={'/images/amandaquentin3.jpeg'} />
              </div>
              <div className={styles.imageContainer} style={{width: '10%'}} >
                  <img className={styles.image} alt='amanda and quentin' src={'/images/amandaquentin5.jpeg'} />
              </div>
              <div className={styles.imageContainer} style={{width: '7.5%'}} >
                  <img className={styles.image} alt='amanda and quentin' src={'/images/amandaquentin7.jpeg'} />
              </div>
              <div className={styles.imageContainer} style={{width: '12.5%'}}>
                  <img className={styles.image}  alt='amanda and quentin' src={'/images/amandaquentin1.jpeg'} />
              </div>
              <div className={styles.imageContainer} style={{width: '10%'}} >
                  <img className={styles.image} alt='amanda and quentin' src={'/images/amandaquentin2.jpeg'} />
              </div>
              <div className={styles.imageContainer} style={{width: '12.5%'}} >
                  <img className={styles.image} alt='amanda and quentin' src={'/images/amandaquentin3.jpeg'} />
              </div>
              <div className={styles.imageContainer} style={{width: '10%'}} >
                  <img className={styles.image} alt='amanda and quentin' src={'/images/amandaquentin5.jpeg'} />
              </div>
              <div className={styles.imageContainer} style={{width: '7.5%'}} >
                  <img className={styles.image} alt='amanda and quentin' src={'/images/amandaquentin7.jpeg'} />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ImageGallery