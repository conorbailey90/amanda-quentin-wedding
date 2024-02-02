
import Link from 'next/link'
function Navlink({item, setActive}) {
  return (
    <Link onClick={() => setActive(false)} href={item.path}>{item.title}</Link>
  )
}

export default Navlink