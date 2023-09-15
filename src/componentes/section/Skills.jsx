import React from 'react';
import styles from './Skills.module.css';
import java from '../../image/Skillls/javascript.svg';
import html from '../../image/Skillls/html.svg';
import css from '../../image/Skillls/css.svg';
import react from '../../image/Skillls/react.svg';
import typescript from '../../image/Skillls/typescript.svg';


function Skills(){
   return(
      <div id="Skills" className={styles.Skills}>
         <h1>Habilidades</h1>
         <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
         <div className={styles.Skills2}>
         <img src={java} alt="Logo do JavaScript" />
         <img src={html} alt="Logo do JavaScript" />
         <img src={css} alt="Logo do JavaScript" />
         <img src={react} alt="Logo do JavaScript" />
         <img src={typescript} alt="Logo do JavaScript" />
         
         </div>
      </div>
   )
}

export default Skills;
