import { getGuests } from '../../../lib/data'
import styles from './page.module.css'

async function GuestList() {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let sortedGuests = [];
  let guests = await getGuests();
  try{
    guests.forEach((g,index) => {
      g.menuType = 'Adult'
      sortedGuests.push(g)
      g.idNum = index + 1;
      g.guests.forEach((guest, idx) => {
        let ceremonyAttendance = g.attendance == 'both' || 'ceremony' ? true : false;
        let brunchAttendance = g.attendance == 'both' || 'brunch' ? true : false;
        let child = {
          _id: guest._id,
          idNum: `${index + 1}${letters[idx]}`,
          name: guest.name,
          email: g.email,
          attendingCeremony: ceremonyAttendance,
          menuType: guest.menu,
          meal: guest.meal,
          attendingBrunch: brunchAttendance,
          hasAllergy: guest.hasAllergy,
          allergyDesc: guest.allergyDesc
        }
        sortedGuests.push(child)
      
      })
    })
  }catch(err){
    console.log(err)
  }
  
  return (
     <div className={styles.guestlist}>
        <div className={styles.container}>
          <h1>Guest List</h1>
          <table className={styles.table}>
          <thead>
                <tr>
                  <th>ID</th>
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
                     <td>{g.idNum}</td>
                    <td>{g.name}</td>
                    <td>{g.email}</td>
                    <td>{g.attendingCeremony == true ? 'Oui' : 'Non'}</td>
                    <td>{g.menuType}</td>
                    <td>{g.meal}</td>
                    <td>{g.attendingBrunch == true ? 'Oui' : 'Non'}</td>
                    <td>{g.hasAllergy}</td>
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


