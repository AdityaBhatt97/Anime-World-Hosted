
import { Navbar } from "@/app/components/Navbar"
import styles from '../../styles/categories.module.css'
import Image from 'next/image'
import Link from "next/link"
import { Footer } from "@/app/components/Footer"





const getGenres = async(param) => {

  
  const date = new Date();
  const year = date.getFullYear();
  const animeYear = year - 5;
  
  // const res = await fetch(`https://api.jikan.moe/v4/anime?genres=${param}&min_score=7&start_date=${animeYear}-01-01&sort=desc&sfw`)
  const res = await fetch(`https://api.jikan.moe/v4/anime?genres=${param}&min_score=7&start_date=${animeYear}-01-01&sort=desc`)
  // const res = await fetch('https://api.jikan.moe/v4/recommendations/anime')
  
  const data = await res.json()

  return data?.data
  
  
  
  }



export  default async  function page({params}){


  const param = params?.id
   let page = 1
    const data = await getGenres(param, page)
    
 
    // console.log(data[0])
    
let start = 0
let end = data.length;



  return (

    <div className={styles.categories}>
      <Navbar />
      
      <div className={styles.categoriesTop}> 

{/* One */}
<Link href={`/anime/${data[start]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
  <div className={styles.categoriesTopAnimes}>
   
   
   <Image src={data[start]?.images?.webp?.large_image_url} height={500} width={500}  className={styles.mainImages}/>
   {/* <div className= {styles.categoriesTopAnimeOneInfo}> */}

  <h2 className={styles.categoriesTopTitle}>{data[start]?.title}</h2>

   {/* </div> */}
   
  </div>
</Link>

{/* Two */}
  <Link href={`/anime/${data[start+1]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
  <div className={styles.categoriesTopAnimes}>
   
   
   {/* <div className= {styles.categoriesTopAnimeOneInfo}> */}

  <h2 className={styles.categoriesTopTitle}>{data[start + 1]?.title}</h2>
   <Image src={data[start + 1]?.images?.webp.large_image_url} height={500} width={500} className={styles.mainImages} />

   {/* </div> */}
   
  </div>
</Link>

  {/* Three */}
  
  <Link href={`/anime/${data[start+2]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
  <div className={styles.categoriesTopAnimes}>
   
   
   <Image src={data[start + 2]?.images?.webp?.large_image_url} height={500} width={500} className={styles.mainImages} />
   {/* <div className= {styles.categoriesTopAnimeOneInfo}> */}

  <h2 className={styles.categoriesTopTitle}>{data[start + 2]?.title}</h2>

   {/* </div> */}
   
  </div>
</Link>

</div>

<div className={styles.categoriesAnimes}>
 
 {
  data.splice(start + 3 , end).map(items => (
    <Link href={`/anime/${items?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
  <div className={styles.categoriesAnime}> 
   <Image src={items?.images?.jpg?.image_url} height={250} width={250} className= {styles.categoriesAnimeImg} />
    <h2>{items?.title}</h2>
  </div>
    </Link>
  ))}

      </div>
 

      <Footer />

    </div>
  )
}


