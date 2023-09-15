import React from 'react';
import styles from './ButtonA.module.css'; // Certifique-se de importar corretamente o módulo CSS

function ButtonA({text,link}) {
   return (
      <div>
         <a href={link}>
         <button className={styles.btn}>{text}</button>
         </a>
      </div>
   );
}

export default ButtonA;
