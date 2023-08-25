import { Navbar } from "@/app/components/Navbar"
import styles from '../styles/popular.module.css'
import Image from 'next/image'
import Link from "next/link"



const getPopular = async() => {
// const res = await fetch('https://api.jikan.moe/v4/top/anime')
  const res = await fetch('https://api.jikan.moe/v4/recommendations/anime')

const data = await res.json()
return data.data

}


export  default async  function page(){



    const data = await getPopular()
    // console.log(data)

   

  return (

    <div className= {styles.popular} >

<Navbar />

<div className={styles.popularAnimes}>




          <Link  href={`/anime/${data[0]?.entry[0]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
          <div className= {styles.popularAnime}> 
         <Image src={data[0]?.entry[0]?.images?.webp?.large_image_url} alt={data[0]?.entry[0]?.title} height={600} width={600} className={styles.popularImages}/>
          <h2>{data[0]?.entry[0]?.title}</h2>
          </div>
          </Link>
       
          
          

    
        </div>

    
  
    </div>
  )
}


