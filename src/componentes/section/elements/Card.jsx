import styles from "./Card.module.css";
import ButtonB from "./ButtonB";
import print from "../../../image/Projects/print.svg";

function Card({ title, tech, description, repo }) {
  return (
    <div className={styles.Card}>
      <a href="https://chic-belekoy-85fa50.netlify.app/">
        <img src={print} className={styles.Card2} alt="Print"></img>
      </a>
      <section>
        <h2>{title}</h2>
        <p>
          <strong>Tecnologia:</strong> {tech}
        </p>
        <p>{description}</p>

        <ButtonB text="Acesse o meu repositório" link={repo}></ButtonB>
      </section>
    </div>
  );
}

export default Card;
