import React from 'react';
import styles from './Navbar.module.css';
import { AiOutlineInstagram , AiOutlineLinkedin,AiOutlineGithub} from "react-icons/ai";
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.Navbar2}>
        <li><Nav.Link href='#Presentation' style={{ textDecoration: 'none' }}>Apresentação</Nav.Link></li>
        <li><Nav.Link href='#Skills' style={{ textDecoration: 'none' }}>Habilidades</Nav.Link></li>
        <li><Nav.Link href='#Projects' style={{ textDecoration: 'none' }}>Projetos</Nav.Link></li>
      </ul>
      <ul className={styles.Navbar3}>
        <li>
        <a href="https://www.instagram.com/giovannimagnani75/" target="_blank" rel="noopener noreferrer">
  <AiOutlineInstagram size={30} /></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/giovanni-magnani-77bb2b17a/" target="_blank" rel="noopener noreferrer">
  <AiOutlineLinkedin size={30} /></a>
        </li>
        <li>
        <a href="https://github.com/mwtghsu" target="_blank" rel="noopener noreferrer">
  <AiOutlineGithub size={30} />
        </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
