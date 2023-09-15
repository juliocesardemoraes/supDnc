import React from 'react';
import styles from './Presentation.module.css';
import ButtonA from './elements/ButtonA';
import ButtonB from './elements/ButtonB';
function Presentation(){
   return(
      <div className={styles.Presentation} id="Presentation" >
         <h4><strong>Bem vindo ao meu portifólio</strong></h4>
          <h1>Olá eu sou o Giovanni</h1>
          <p>Sou um apaixonado por tecnologia e soluções inovadoras.<br>
          </br>Como Product Manager, eu tenho o compromisso de resolver <br>
          </br>  problemascomplexos e trazer resultados excepcionais para os <br>
          </br> negócios.Meus projetos já geraram milhões de reais em receita<br>
          </br>anualestou sempre em busca de novos desafios para superar.</p>
          <ButtonA link ='https://github.com/mwtghsu' text='Conecte-se comigo'></ButtonA>
          
      </div>
      
   )
}

export default Presentation