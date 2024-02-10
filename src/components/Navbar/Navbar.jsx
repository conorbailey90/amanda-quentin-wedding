'use client'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { useEffect, useState } from 'react'
import Navlink from './Navlink/Navlink'


const links = [
  {
      title: 'Accueil',
      path: '/'
  },
  {
    title: 'La Cérémonie',
    path: '/ceremonie'
  },
  {
    title: 'RSVP',
    path: '/rsvp' 
  },
  {
      title: 'Hébergements',
      path: '/Hebergements'
  }
 
]

export default function Navbar() {
  const [active, setActive] = useState(false);


  return (
    <div className={`${styles.navbar}`}>
      <div className={styles.container}>
        <Link href={'/'}>
          <h3 className={styles.logo} style={{fontFamily: 'parisienne'}}>Amanda & Quentin</h3>
        </Link>
        <nav className={styles.nav}>
          {links.map(link => (
            <Navlink setActive={setActive} item={link} key={link.title} />
          ))}
        </nav>
  
        <div onClick={() => setActive(true)} className={styles.menuToggle}>
          <span className={styles.openOne}></span>
          <span className={styles.openTwo}></span>
        </div>
        <div className={`${styles.mobileLinks} ${active ? styles.active : ''}`}>
            <div onClick={() => setActive(false)} className={styles.menuToggle}>
              <span className={styles.closeOne}></span>
              <span className={styles.closeTwo}></span>
            </div>
            {links.map(link => (
                <Navlink setActive={setActive} item={link} key={link.title}/>
            ))}

        </div> 
      </div>
    </div>
  )
}
