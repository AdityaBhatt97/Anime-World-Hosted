'use client'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SearchResults } from './SearchResults'
import { AiOutlineSearch} from "react-icons/ai";




export const SearchBar = () => {

    const [search , setSearch] = useState('')
    const [data , setData] = useState([])
    // const [rende , setRende] = useState(false)



    useEffect( () =>{


      
     const getData = async() => {
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`)
      const response = await res.json();
        setData(response) 

     }

   let timeout =   setTimeout( ()=>{
        
     search.length > 0 &&  getData()  
     
      }, 500)

      return () => clearTimeout(timeout)
    } ,[search])

    
    const handleChange = (e) => {
      setData([])
      setSearch(e.target.value)
    }

  return (
    <>
   <input type="text" placeholder='Search Here....'  onChange={(e) => handleChange(e)} className= {styles.searchInput}/>

   {search.length > 0 &&
   <Link href={`animes/${search}`}>
    
  <button className={styles.search}>
    <AiOutlineSearch className={styles.AiOutlineSearch}/>
  </button>
   </Link>
  }

{data?.data && <SearchResults data={data} /> }
{/* <SearchResults data={data} /> */}

        </>
  )
}
