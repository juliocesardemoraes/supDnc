import React from 'react';
import { AiOutlineInstagram , AiOutlineLinkedin,AiOutlineGithub} from "react-icons/ai";
import styles from './Footer.module.css';
function Footer(){
   return(
      <div className={styles.Footer}>
         <ul className={styles.Footer2}>
      <li>
      <a href="https://www.instagram.com/giovannimagnani75/" target="_blank" rel="noopener noreferrer">
<AiOutlineInstagram size={35} /></a>
      </li>
      <li>
      <a href="https://www.linkedin.com/in/giovanni-magnani-77bb2b17a/" target="_blank" rel="noopener noreferrer">
<AiOutlineLinkedin size={35} /></a>
      </li>
      <li>
      <a href="https://github.com/mwtghsu" target="_blank" rel="noopener noreferrer">
<AiOutlineGithub size={35} />
      </a>
      </li>
    </ul>
    <p>mwtghsu@gmail.com   Giovanni Magnani - 2023</p>
    </div>
   )
}

export default Footer