
import Link from 'next/link'

import styles from '../styles/animePage.module.css'
import Image from 'next/image'



const getData = async(param) => {
 const res = await fetch(`https://api.jikan.moe/v4/anime/${param}/recommendations`)
 const data = await res.json()
 return data.data

}

 export  const PeopleLikeAnime = async({param}) => {

 
    
    
    const data = await getData(param)
    
    return (
    
    <div className={styles.peopleLike}>
        <div className={styles.peopleLikeAnimes}>

 {
    data.slice(0,3).map(items => (



        <Link  href={`/anime/${items?.entry?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}}>
        <div className={styles.peopleLikeAnime} key={items?.entry?.mal_id}>
            <Image src={items?.entry?.images?.webp?.image_url} height={250} width={250} className={styles.peopleLikeImages} alt={items?.entry?.title}/>
            <h2>{items?.entry?.title}</h2>

        </div>
        </Link>
    ))
     
}
</div>
        </div>
        
  )
}
