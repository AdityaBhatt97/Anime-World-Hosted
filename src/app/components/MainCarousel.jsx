"use client"
import styles from '../styles/home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import {AiFillCaretLeft ,AiFillCaretRight } from "react-icons/ai";


export const MainCarousel = () => {

    const [width , setWidth] = useState(0)
  

const Slider = () => {
    setWidth(width- 100)
    
    
}

let timeOut
useEffect(() => {
 timeOut = setInterval(() => {
        
        if(width > -200){
            Slider()
        }else{
            clearInterval(Slider)
            setWidth(0)
        }            



    }, 5000)
    
        return () => clearInterval(timeOut)
}, [width])





    return (
        <div className={styles.wrapper} style={{transform: `translateX(${width}vw)`}}>



        
           
            <Link  href={`/anime/51019`} style={{textDecoration :'none'}}>
            <div className={styles.slide}>

                <Image className={styles.mainBg}  src={"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/02/Demon-Slayer-Season-3.jpg?ssl=1&quality=80&w=f"} alt='DemonSlayer'  width={1200} height={1200} />
            </div>
</Link>



            <Link  href={`/anime/31964`} style={{textDecoration :'none'}}>
            <div className={styles.slide}>

                <Image className={styles.mainBg} src={"https://staticg.sportskeeda.com/editor/2023/02/6ffbd-16751913590040-1920.jpg"} alt='My Hero Academia' width={1200} height={1200} />
            </div>
</Link>



 <Link  href={`/anime/32281`} style={{textDecoration :'none'}}>
            <div className={styles.slide}>
                {/* <Image className={styles.mainBg} src={"https://images2.minutemediacdn.com/image/fetch/w_850,h_560,c_fill,g_auto,f_auto/https%3A%2F%2Fhiddenremote.com%2Ffiles%2Fimage-exchange%2F2021%2F12%2Fie_81933-850x560.jpeg"} alt='demonSlayer' width={1200} height={1200} /> */}
                <Image className={styles.mainBg} src={"https://w.forfun.com/fetch/70/70d29d728c5d78ed5781bcc351af4ffb.jpeg"} alt='Your Name' width={1200} height={1200} />
                

            </div>
 </Link>

        </div>
    )
}
