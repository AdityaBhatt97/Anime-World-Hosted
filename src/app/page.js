import Image from 'next/image'
import styles from './styles/home.module.css'
import { Navbar } from './components/Navbar'
import {MainCarousel} from './components/MainCarousel'
import { Recommended } from './components/Recommended'
import Categories from './components/Categories'
import Link from 'next/link'
import { Footer } from './components/Footer'


const getUpcoming = async() => {
  // const res = await fetch('https://api.jikan.moe/v4/seasons/upcoming')
  // const res = await fetch('https://api.jikan.moe/v4/anime?min_score=7')
  // const res = await fetch('https://api.jikan.moe/v4/anime?min_score=7&start_date=2018-01-01')
  
 
  const date = new Date()
  const year = date.getFullYear()
  const animeYear = year - 5


  // const res = await fetch(`https://api.jikan.moe/v4/anime?min_score=7&rating=Rx&page=1`)
  const res = await fetch(`https://api.jikan.moe/v4/anime?min_score=7&start_date=${animeYear}-05-23&sfw`)
  const data = await res.json()
  return data.data
}



export  default async  function Home() {
  
  const data = await getUpcoming()
  
  // console.log(month , trending )
  
  return (
      <div className={styles.description}>
        <Navbar/>

        <div className={styles.container}>

          

<MainCarousel/>          


          
        </div>
          <div className = {styles.mainBgOverlay}></div> 
        <Recommended/>
<Categories/>      

<div className={styles.topRated}>
  <h2>Top Rated</h2>

  <div className={styles.topRated_home}>
    {
      data.slice(0,24).map(items => (
        <Link href={`/anime/${items?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}} key={items?.mal_id}>
        <div key={items?.mal_id}>
        <Image src={items?.images?.jpg?.image_url} alt= {items?.titles[0].title} height={250} width={250} className={styles.topRatedImages}/>
        <h3>{items?.titles[0].title}</h3>
      </div>
         </Link>
      ))
    }
  </div>

</div>

<Footer/>
      
      </div>
  )
}
