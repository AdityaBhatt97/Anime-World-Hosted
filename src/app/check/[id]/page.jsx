'use client'
import { Navbar } from "@/app/components/Navbar"
import styles from '../../styles/categories.module.css'
import Image from 'next/image'
import Link from "next/link"
import { Footer } from "@/app/components/Footer"
import { useEffect, useState } from "react"
// import { useEffect , useState } from "react"






// const getGenres = async(param, page ) => {

  
//   const date = new Date();
//   const year = date.getFullYear();

//   const animeYear = year - 5;

//   // const res = await fetch(`https://api.jikan.moe/v4/anime?genres=${param}&min_score=7&start_date=${animeYear}-01-01&sort=desc&sfw`)
//   const res = await fetch(`https://api.jikan.moe/v4/anime?genres=${param}&min_score=7&start_date=${animeYear}-01-01&sort=desc&page=${page}`)
//   // const res = await fetch('https://api.jikan.moe/v4/recommendations/anime')

//   const data = await res.json()

//   return data?.data



//   }



export  default async  function page({params}){


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          // `https://api.jikan.moe/v4/anime?genres=${param}&min_score=7&start_date=${animeYear}-01-01&sort=desc&page=${page}`
          `https://api.jikan.moe/v4/anime?genres=2&min_score=7&start_date=2021-01-01&sort=desc&page=1`
        );
        const datas = await res.json();
        setData(datas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  //  param && page && animeYear && fetchData();
  //  fetchData();
  }, []);
  
  const [data , setData] = useState([])
  const param = params?.id
  const [page , setPage ] = useState(1)

    
  const date = new Date();
  const year = date.getFullYear();
  // const data = await getGenres(param, page)
  
    const animeYear = year - 5;

 
    
  
 
console.log(data)
    
let start = 0
// let end = data.length;


// const handleInfiniteScroll = () => {

//   if(window.innerHeight + document.documentElement.scrollTop == document.documentElement.scrollHeight){
//       page = 2
//       getGenres(param , page)
//     }
//   }
  
//  window.addEventListener('scroll' , handleInfiniteScroll);
 

  return (

    <div className={styles.categories}>
      <Navbar />
    
    </div>
  )
}


