import { Navbar } from "@/app/components/Navbar"
import styles from '../../styles/search.module.css'
import Image from 'next/image'
import Link from "next/link"
import { Recommended } from "@/app/components/Recommended"
import { Footer } from "@/app/components/Footer"



const getSearch = async(param) => {
const res = await fetch(`https://api.jikan.moe/v4/anime?q=${param}?&&sfw`)
const data = await res.json()
return data.data

}


export  default async  function page({params}){

     console.log(params)
    const param = params.search

    const data = await getSearch(param)
    // console.log(data)

   

  return (

    <div className= {styles.search} >

<Navbar />
<div className={styles.searchTitles}>

 {data.length > 0 && <h2>Searched For {param}</h2>}
</div>
<div className={styles.searchAnimes}>


{


  data.length > 0 ?  data.map(items => (
        <Link href={`/anime/${items?.mal_id}`} style={{textDecoration : 'none', color: 'white'}}>
        <div className={styles.searchAnime}>

        <Image  className = {styles.searchImages} src={items?.images?.webp?.image_url} height={250} width={250}/>
        <h2>{items?.title}</h2>
        </div>
        </Link>

    )) :
    <div className={styles.nullSearch}>
     <Image src={'https://www.crunchyroll.com/build/assets/img/search/empty-search.png'} height={350} width={350}/>
    <h2>Sorry, no results were found. Check your spelling or try searching for something else.</h2>
    </div>
}



    
        </div>

    <Footer/>
  
    </div>
  )
}


