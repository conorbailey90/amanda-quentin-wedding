import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link href={'/'}>
          <h3 style={{fontFamily: 'parisienne'}}>Amanda & Quentin</h3>
        </Link>
        <nav className={styles.nav}>
          <Link href={'/'}>Home</Link>
          <Link href={'/accomodations'}>Accomodations</Link>

          <Link href={'/rsvp'}>RSVP</Link>
        </nav>
      </div>
    </div>
  )
}
