import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import { SearchBar } from './SearchBar'

export const Navbar = () => {
  return (
    <div className={styles.nav}>
    <Link href={'/'} style={{textDecoration : 'none' , color : 'white'}} >
    <div className={styles.left}><h2>ANIME WORLD</h2></div>
    </Link>

    <div className={styles.center}>
   <SearchBar />
    </div>

    <div className={styles.right}>

    <Link href={'/'} style={{textDecoration : 'none' , color : 'white'}}>
        <li >Home</li>
    </Link>
       
    <Link href={'/popular'} style={{textDecoration : 'none' , color : 'white'}}>
        <li>Popular</li>
    </Link>
    
    {/* <Link href={'/trending'} style={{textDecoration : 'none', color : 'white'}}>
        <li>Trending</li>
    </Link>
       
        */}
    
    </div>
        </div>
  )
}
