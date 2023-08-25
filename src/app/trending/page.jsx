
import { Navbar } from "@/app/components/Navbar"
import styles from '../styles/trending.module.css'
import Image from 'next/image'
import Link from "next/link"



const getTrending = async() => {



const res = await fetch(`https://api.jikan.moe/v4/anime?min_score=8&start_date=2023-02-01&sfw` )
const data = await res.json()
return data.data

}


export  default async  function page(){


    const data = await getTrending()
    
  
   

    return (
        
        <div className= {styles.trending} >
<Navbar />

<h2>{data[0]?.title}</h2>



     
  
    </div>
  )
}


