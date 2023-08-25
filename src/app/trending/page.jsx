
import { Navbar } from "@/app/components/Navbar"
import styles from '../styles/categories.module.css'
import Image from 'next/image'
import Link from "next/link"
import { Footer } from "@/app/components/Footer"





const getGenres = async() => {

  
  const date = new Date();
  const year = date.getFullYear();
  const animeYear = year - 5;
  
  // const res = await fetch(`https://api.jikan.moe/v4/anime?genres=${param}&min_score=7&start_date=${animeYear}-01-01&sort=desc&sfw`)
//   const res = await fetch(`https://api.jikan.moe/v4/anime?&min_score=7&start_date=${animeYear}-01-01&sort=desc`)
  const res = await fetch('https://api.jikan.moe/v4/recommendations/anime')
  
  const data = await res.json()

  return data?.data
  
  
  
  }



export  default async  function page(){


    const data = await getGenres()
    
 
    // console.log(data[0])
    
let start = 0
// let end = data?.length;
let end = 25;
// console.log(end)



  return (

    <div className={styles.categories}>
      <Navbar />
      
 

{/* One */}
<Link href={`/anime/${data[start]?.entry[start]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
  <div className={styles.categoriesTopAnimes}>
   
   
   <Image src={data[start]?.entry[start]?.images?.webp?.large_image_url} height={500} width={500}  className={styles.mainImages} alt={data[start]?.entry[start]?.title}/>
   {/* <div className= {styles.categoriesTopAnimeOneInfo}> */}

  <h2 className={styles.categoriesTopTitle}>{data[start]?.entry[start]?.title}</h2>

   {/* </div> */}
   
  </div>
</Link>



      <Footer />

    </div>
  )
}


