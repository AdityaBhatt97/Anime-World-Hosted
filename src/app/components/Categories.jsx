import Image from "next/image"
import styles from "../styles/home.module.css"
import Link from "next/link"


const Categories = () => {
  return (
    <div className={styles.all_categories}>
        <h2 className={styles.all_categories_title}>EXPLORE BY INTEREST</h2>
        <div className={styles.main_categories}>

        <Link href={'/categories/1'} style={{textDecoration : 'none' , color : "white"}}>

    <div className={styles.categories}>
        <h2>Action</h2>
        <Image className={styles.categories_image} src={'https://w.forfun.com/fetch/36/368579e8f6db3801e16d877cd04039a3.jpeg?w=1200&r=0.5625'} alt= "action" width={150} height= {150}/>
        <div ></div>
    </div>
</Link>

<Link href={'/categories/2'} style={{textDecoration : 'none' , color : "white"}}>

    <div className={styles.categories}>
        <h2>Adventure</h2>
        <Image className={styles.categories_image} src={'https://w.forfun.com/fetch/4e/4e462e619bf4c9469c28236f94c11757.jpeg?w=1200&r=0.5625'} alt= "adventure" width={150} height= {150}/>
        <div ></div>
    </div>
</Link>

<Link href={'/categories/62'} style={{textDecoration : 'none' , color : "white"}}>

    <div className={styles.categories}>
        <h2>Isekai</h2>
        {/* <Image className={styles.categories_image} src={'https://w.forfun.com/fetch/7e/7e7985adb08b7aa711799af232379f14.jpeg?w=1200&r=0.5625'} alt= "isekai" width={150} height= {150}/> */}
        <Image className={styles.categories_image} src={'https://w.forfun.com/fetch/d8/d840b0268ae111caa70bbf7fd6b50b82.jpeg?w=1200&r=0.5625'} alt= "isekai" width={150} height= {150}/>
        <div ></div>
    </div>
</Link>

<Link href={'/categories/10'} style={{textDecoration : 'none' , color : "white"}}>
    <div className={styles.categories}>
        <h2>Fantasy</h2>
        <Image className={styles.categories_image} src={'https://w.forfun.com/fetch/05/0512acd4983551a0b9ccf642e385b155.jpeg?w=1200&r=0.5625'} alt= "fantasy" width={150} height= {150}/>
        <div ></div>
    </div>
</Link>

<Link href={'/categories/22'} style={{textDecoration : 'none' , color : "white"}}>

    <div className={styles.categories}>
        <h2>Romance</h2>
        <Image className={styles.categories_image} src={'https://w.forfun.com/fetch/3f/3f58801be5e0b3e412234cae21abc938.jpeg?w=1200&r=0.5625'} alt= "romance" width={150} height= {150}/>
        <div ></div>
    </div>
</Link>

<Link href={'/categories/27'} style={{textDecoration : 'none' , color : "white"}}>

    <div className={styles.categories}>
        <h2>Shounen</h2>
        <Image className={styles.categories_image} src={'https://w.forfun.com/fetch/d6/d6624a2087f786ac51bc035cbe0a318e.jpeg?w=1200&r=0.5625'} alt= "shounen" width={150} height= {150}/>
        <div ></div>
    </div>

    </Link>


    <Link href={'/categories/78'} style={{textDecoration : 'none' , color : "white"}}>

    <div className={styles.categories}>
        <h2>Thriller</h2>
        <Image className={styles.categories_image} src={'https://w.forfun.com/fetch/1d/1d4049e0739d3f94a224ff7e27750293.jpeg?w=1200&r=0.5625'} alt= "thriller" width={150} height= {150}/>
        <div ></div>
    </div>

    </Link>


    <Link href={'/categories/36'} style={{textDecoration : 'none' , color : "white"}}>

    <div className={styles.categories}>
        <h2>Slice Of Life</h2>
        <Image className={styles.categories_image} src={'https://w.forfun.com/fetch/a4/a414d57e3997c995718167a5a989c352.jpeg?w=1200&r=0.5625'} alt= "slice of life" width={150} height= {150}/>
        <div ></div>
    </div>

    </Link>

        </div>
      
    </div>
  )
}

export default Categories
