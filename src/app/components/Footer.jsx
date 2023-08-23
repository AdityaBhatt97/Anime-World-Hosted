import styles from '../styles/footer.module.css'
import Link from 'next/link'
import Image from 'next/image'


export const Footer = () => {



  return (
    
    <div className={styles.footer}>
        <div className={styles.left}>
            <h2>ANIME WORLD</h2>
        </div>

        <div className={styles.center}>

            <Link href={'/'} style={{textDecoration : 'none' , color : 'white'}}>
            <h2 className={styles.centerNav}>Home</h2>
            </Link>

            <Link href={'/popular'} style={{textDecoration : 'none' , color : 'white'}}>
            <h2 className={styles.centerNav}>Popular</h2>
            </Link>

            <Link href={'/trending'} style={{textDecoration : 'none' , color : 'white'}}>
            <h2 className={styles.centerNav}>Trending</h2>
            </Link>
        </div>

        <div className={styles.right}> 

        <a href='https://www.twitch.tv/' target='blank'>
          <Image className={styles.footerImage} src={'https://upload.wikimedia.org/wikipedia/commons/1/19/Twitch.jpg'} alt='twitch'  height={20} width={20} />
          </a>

        <a href="https://www.instagram.com/" target='blank'>
        <Image className={styles.footerImage}src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png'} alt='instagram' height={20} width={20}/>
        </a>

        <a href="https://twitter.com/" target='blank'>
        <Image className={styles.footerImage}src={'https://help.twitter.com/content/dam/help-twitter/brand/logo.png'} alt='twitter' height={20} width={20}/>
        </a>

        <a href="https://www.youtube.com/" target='blank'>
        <Image className={styles.footerImage}src={'https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=2000'} alt='youtube' height={20} width={20}/>
        </a>
            
        </div>

        </div>
        
  )
}
