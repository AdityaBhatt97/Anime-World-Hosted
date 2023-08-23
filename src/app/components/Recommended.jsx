import Image from "next/image";
import Link from "next/link";
import styles from "../styles/home.module.css"



async function getRecommended ()  {

 const date = new Date();
 const year= date.getFullYear()
 const animeYear = year -1



    const res = await fetch(`https://api.jikan.moe/v4/anime?min_score=7&sfw&start_date=${animeYear}-01-01`);
    const data = await res.json()
    return data
} 

export  async function Recommended () {
        const data = await getRecommended()
    

  return (
    <div className={styles.recommended} >

       <h2 className={styles.recommended_title}>
        
         RECOMMENDED
        </h2>

        <div className={styles.recommended_list}>


{
    data?.data.slice(0,4).map(items => (

        <Link href={`/anime/${items?.mal_id}`} style={{textDecoration: "none"}}>
    <div key={items?.mal_id}>
     <Image src={items?.images.jpg.image_url} alt= {items?.title} width={250} height={250} className={styles.recommendedImages}/>
    <h2>{items?.title}</h2>
    </div>
        </Link>

      ))
      
}
      
      </div>
      
    </div>
  )
}

