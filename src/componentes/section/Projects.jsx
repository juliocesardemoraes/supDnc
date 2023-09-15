import styles from "./Projects.module.css";
import Card from "./elements/Card";
import print from "../../image/Projects/print.svg";
import ccpx from "../../image/Projects/ccpx.png";
import bootcamp from "../../image/Projects/bootcamp.png";

function Projects() {
  return (
    <div id="Projects" className={styles.Projects}>
      <h1>Projetos</h1>
      <Card
        img={print}
        title="Projeto XPTO"
        tech="HTML CSS Javascript"
        description="Desenvolvimento de uma lading page para o lançamento da formação em tecnologia"
        repo="https://github.com/mwtghsu"
      ></Card>
      <div className={styles.Card6}>
        <a href="https://animated-seahorse-08d098.netlify.app/">
          <img src={ccpx} className={styles.Card4} alt="Print"></img>
        </a>
        <a href="https://regal-phoenix-2c622d.netlify.app/w">
          <img src={bootcamp} className={styles.Card5} alt="Print"></img>
        </a>
      </div>
    </div>
  );
}

export default Projects;
