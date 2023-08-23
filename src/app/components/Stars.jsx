import styles from '../styles/animePage.module.css'
import {  FaStar , FaStarHalfStroke ,FaStarOfDavid } from "react-icons/fa6";
// import { PiStarBold  } from "react-icons/pi";
import { AiOutlineStar } from "react-icons/ai";



export const Stars = ({rating}) => {


    rating = rating/2

    const ratingStar = Array.from({length : 5} , (elm , index) => {
    let number = index + .5

return(
        <span key={index}>
  {
    rating >= index + 1 ? <FaStar className= {styles.icon} /> : rating >= number ? <FaStarHalfStroke className={styles.icon}/> :  <AiOutlineStar  className={styles.icon}/>
  }
        </span>
    )
    } )

  return (
    
    <div className={styles.stars}>
    {ratingStar}    
        </div>
        
  )
}
