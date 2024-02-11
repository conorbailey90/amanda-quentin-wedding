import styles from './timeline.module.css'
import Image from 'next/image'
function Timeline() {
    let times = [
        {
            time: '16:00',
            name: 'Guests Arrive',
            image: '/images/guests.png',
            column: 1,
            row: 2
        },
        {
            time: '16:30',
            name: 'Le Ceremonie',
            image: '/images/rings.webp',
            column: 2,
            row: 3
        },
        {
            time: '17:15',
            name: 'Photos',
            image: '/images/camera.webp',
            column: 3,
            row: 2
        },
        {
            time: '18:00',
            name: 'Cocktails',
            image: '/images/cocktails.webp',
            column: 4,
            row: 3
        },
        {
            time: '20:00',
            name: 'Repas',
            image: '/images/dinner.webp',
            column: 5,
            row: 2
        },
        {
            time: '22:00',
            name: 'Party',
            image: '/images/music.svg',
            column: 6,
            row: 2
        }
    ]

  return (
    <div className={styles.timelineMain}>
        <div className={styles.container}>
            <div className={styles.timeline}>
                <div className={styles.centerLine}></div>
                {times.map((t,idx) => (
                    
                    <div style={{gridColumn: t.column, gridRow: t.row}} className={`${styles.timelineSegment}`} key={t.name}>
                        <Image alt='wood' className={styles.timelineBkg} src={'/images/wood.png'} fill></Image>
                        {idx % 2 == 1 && <div className={styles.line}></div>}
                        <p style={{fontWeight: '800'}}>{t.time}</p>
                        <p>{t.name}</p>
                        <Image className={styles.image} src={t.image} alt='timeline' width={40} height={40} ></Image>
                        {idx % 2 == 0 && <div className={styles.line}></div>}
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Timeline