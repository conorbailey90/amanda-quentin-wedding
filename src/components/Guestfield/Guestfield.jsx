'use client'
import { useRef, useState } from 'react'
import styles from './guestfield.module.css'

function Guestfield({i, attendingCeremony, attendingBrunch, hasGuests, numberOfGuests}) {
    const [hasAllergy, setHasAllergy] = useState(false)
    function handleAllergyChange(e){
        if(e.target.value == 'yes'){
            setHasAllergy(true)
        }else{
            setHasAllergy(false)
        }

    }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: '1px solid black', marginBottom: '2rem', paddingBottom: '1rem'}} className={(attendingCeremony || attendingBrunch) && hasGuests && numberOfGuests > 0 ? styles.display : styles.noDisplay}>
    <p>Guest {i+1} Details</p>
     <input required type="text" name={`guestName${i}`} placeholder={`Enter name of Guest ${i + 1}'`} />
     <select id={`guestMenuType${i}`} name={`guestMenuType${i}`}>
        <option value="not answered">Type of menu</option>
        <option value="childrens">Childrens</option>
        <option value="adult">Adult</option>
      </select>
      <select id={`guestMealChoise${i}`} name={`guestMealChoise${i}`}>
        <option value="not answered">Choix de repas</option>
        <option value="Viande">Viande</option>
        <option value="Végétarien">Végétarien</option>
      </select>
      <select id={`guestAttendance${i}`} name={`guestAttendance${i}`}>
        <option value="not answered">Please choose attendance</option>
        <option value="both">Ceremony and Brunch</option>
        <option value="ceremony">Ceremony</option>
        <option value="brunch">Brunch</option>
      </select>
      <select onChange={e => handleAllergyChange(e)} id={`guestAllergy${i}`} name={`guestAllergy${i}`}>
          <option value="not answered">Avez-vous des allergies?</option>
          <option value="yes">Oui</option>
          <option value="no">Non</option>
      </select>

      <input className={hasAllergy ? styles.display : styles.noDisplay} id={`guestAllergyDesc${i}`} name={`guestAllergyDesc${i}`} type="text" placeholder='If so then please advise'/>
  </div>
  )
}

export default Guestfield