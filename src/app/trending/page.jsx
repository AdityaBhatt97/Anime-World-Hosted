
import { Navbar } from "@/app/components/Navbar"
import styles from '../styles/trending.module.css'
import Image from 'next/image'
import Link from "next/link"
import { Footer } from "@/app/components/Footer"





const getTrending = async() => {

  
  const date = new Date();
  const year = date.getFullYear();
  const animeYear = year - 5;
  
  // const res = await fetch(`https://api.jikan.moe/v4/anime?genres=${param}&min_score=7&start_date=${animeYear}-01-01&sort=desc&sfw`)
  const res = await fetch(`https://api.jikan.moe/v4/anime?&min_score=7&start_date=${animeYear}-01-01&sort=desc`)
  // const res = await fetch('https://api.jikan.moe/v4/recommendations/anime')
  
  const data = await res.json()

  return data?.data
  
  
  
  }



export  default async  function page(){


    const data = await getTrending()
    
 
    // console.log(data[0])
    
let start = 0




  return (

    <div className={styles.categories}>
      <Navbar />
      
      <div className={styles.categoriesTop}> 

{/* One */}
<Link href={`/anime/${data[start]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
  <div className={styles.categoriesTopAnimes}>
   
   
   <Image src={data[start]?.images?.webp?.large_image_url} height={500} width={500}  className={styles.mainImages} alt={data[start]?.title}/>
   {/* <div className= {styles.categoriesTopAnimeOneInfo}> */}


   {/* </div> */}
   
  </div>
</Link>

{/* Two */}
  <Link href={`/anime/${data[start+1]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
  <div className={styles.categoriesTopAnimes}>
   
   
   {/* <div className= {styles.categoriesTopAnimeOneInfo}> */}


   <Image src={data[start + 1]?.images?.webp.large_image_url} height={500} width={500} className={styles.mainImages} alt={data[start]?.title} />

   {/* </div> */}
   
  </div>
</Link>

  {/* Three */}
  
  <Link href={`/anime/${data[start+2]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
  <div className={styles.categoriesTopAnimes}>
   
   
   <Image src={data[start + 2]?.images?.webp?.large_image_url} height={500} width={500} className={styles.mainImages} alt={data[start]?.title}/>
   {/* <div className= {styles.categoriesTopAnimeOneInfo}> */}


   {/* </div> */}
   
  </div>
</Link>

</div>


 

      <Footer />

    </div>
  )
}


