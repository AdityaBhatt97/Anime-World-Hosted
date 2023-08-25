import { Navbar } from "@/app/components/Navbar"
import styles from '../styles/popular.module.css'
import Image from 'next/image'
import Link from "next/link"



const getPopular = async() => {
// const res = await fetch('https://api.jikan.moe/v4/top/anime')
// const res = await fetch('https://api.jikan.moe/v4/top/reviews')
const res = await fetch(`https://api.jikan.moe/v4/anime?&min_score=7&start_date=2021-01-01&sort=desc`)

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




          <Link  href={`/anime/${data[0]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
          <div className= {styles.popularAnime}> 
         <Image src={data[0]?.images?.webp?.large_image_url} alt={data[0]?.title} height={600} width={600} className={styles.popularImages}/>
          <h2>{data[0]?.title}</h2>
          </div>
          </Link>
       
          
     
          
          <Link  href={`/anime/${data[1]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}} >
          <div className= {styles.popularAnime}> 
          <h2>{data[1]?.title}</h2>
         <Image src={data[1]?.images?.webp?.large_image_url} alt={data[1]?.title} height={600} width={600} className={styles.popularImages}/>
          </div>
       
          </Link>
          
     
          
          <Link  href={`/anime/${data[2]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
            <div className= {styles.popularAnime}> 
         <Image src={data[2]?.images?.webp?.large_image_url} alt={data[2]?.title} height={600} width={600} className={styles.popularImages}/>
          <h2>{data[2]?.title}</h2>
          </div>
          </Link>
       
          
     
          
          <Link  href={`/anime/${data[3]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
          <div className= {styles.popularAnime}> 
          <h2>{data[3]?.title}</h2>
         <Image src={data[3]?.images?.webp?.large_image_url} alt={data[3]?.title} height={600} width={600} className={styles.popularImages}/>
          </div>
          </Link>
       
          
     
          
          <Link  href={`/anime/${data[4]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
          <div className= {styles.popularAnime}> 
         <Image src={data[4]?.images?.webp?.large_image_url} alt={data[4]?.title} height={600} width={600}  className={styles.popularImages}/>
          <h2>{data[4]?.title}</h2>
          </div>
          </Link>
       
          
     
          <Link  href={`/anime/${data[5]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
            <div className= {styles.popularAnime}> 
          <h2>{data[5]?.title}</h2>
         <Image src={data[5]?.images?.webp?.large_image_url} alt={data[5]?.title} height={600} width={600} className={styles.popularImages}/>
          </div>
          </Link>
       
          
          <Link  href={`/anime/${data[6]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
          <div className= {styles.popularAnime}> 
         <Image src={data[6]?.images?.webp?.large_image_url} alt={data[6]?.title} height={600} width={600} className={styles.popularImages}/>
          <h2>{data[6]?.title}</h2>
          </div>
          </Link>
       
          
          <Link  href={`/anime/${data[7]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
          <div className= {styles.popularAnime}> 
          <h2>{data[7]?.title}</h2>
         <Image src={data[7]?.images?.webp?.large_image_url} alt={data[7]?.title} height={600} width={600} className={styles.popularImages}/>
          </div>
          </Link>
       
          
          <Link  href={`/anime/${data[8]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
            <div className= {styles.popularAnime}> 
         <Image src={data[8]?.images?.webp?.large_image_url} alt={data[8]?.title} height={600} width={600} className={styles.popularImages}/>
          <h2>{data[8]?.title}</h2>
          </div>
          </Link>
       
          
          <Link  href={`/anime/${data[9]?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
          <div className= {styles.popularAnime}> 
          <h2>{data[9]?.title}</h2>
         <Image src={data[9]?.images?.webp?.large_image_url} alt={data[9]?.title} height={600} width={600} className={styles.popularImages}/>
          </div>
          </Link>
       
          

    
        </div>

    
  
    </div>
  )
}


