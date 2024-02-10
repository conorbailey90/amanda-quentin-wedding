import { getGuests } from '../../../lib/data'
import styles from './page.module.css'

async function GuestList() {
  let sortedGuests = [];
  let guests = await getGuests();

  guests.forEach(g => {
    sortedGuests.push(g)
    g.guests.forEach(guest => {
      let child = {
        _id: guest._id,
        name: guest.name,
        email: g.email,
        attendingCeremony: guest.attendingCeremony,
        menuType: guest.menuType,
        meal: guest.meal,
        attendingbrunch: guest.attendingbrunch,
        hasAllergy: guest.hasAllergy,
        allergyDesc: guest.allergyDesc
      }
      sortedGuests.push(child)
    })
  })
  return (
     <div className={styles.guestlist}>
        <div className={styles.container}>
          <h1>Guest List</h1>
          <table>
          <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Attending Ceremony</th>
                  <th>Menu Type</th>
                  <th>Meal Choice</th>
                  <th>Attending Brunch</th>
                  <th>Any Allergies</th>
                  <th>Allergy Description</th>
                  <th>Song Choice</th>
                </tr>
               
              </thead>
            <tbody>
              
              {sortedGuests.map(g => (
                
                  <tr key={g._id}>
                    <td>{g.name}</td>
                    <td>{g.email}</td>
                    <td>{g.attendingCeremony ? 'Oui' : 'Non'}</td>
                    <td>Adult</td>
                    <td>{g.meal}</td>
                    <td>{g.attendingbrunch ? 'Oui' : 'Non'}</td>
                    <td>{g.hasAllergy ? 'Oui' : 'Non'}</td>
                    <td>{g.allergyDesc}</td>
                    <td>{g.songChoice}</td>
                  </tr>
            ))}
            </tbody>
          </table>
        </div>
       
     </div>
  )
}

export default GuestList


