'use client'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import Image from 'next/image'
export const SearchResults= ({data}) => {

    // console.log(data.data)

// console.log(data)
  return (
    <div className={styles.autoComplete}>

{
  data?.data.slice(0,3).map(items => (
                <Link href={`/anime/${items?.mal_id}`} style={{textDecoration : 'none' , color : 'white'}} key={items?.mal_id}>
                <div className={styles.autoCompleteAnime} key={items?.mal_id}>
                    <div>

                    <Image src={items?.images?.webp?.image_url} alt={items?.title} height={150} width={150} className={styles.autoCompleteImage}/>
                    </div>
                    <div>
                    <p>{items?.title}</p>
                    </div>

                </div>
                </Link>
            ))
        }

        </div>
  )
}
