import PropTypes from "prop-types";

export default function Card({ livro }) {
  return (
    <div className="card">
      <img src={livro.imagem}></img>
      <h2 className="book__title">{livro.nome}</h2>
      <h3 className="book__author">{livro.autor}</h3>
    </div>
  );
}

Card.propTypes = {
  livro: PropTypes.object,
};

/*
 {
    nome: "Garota Exemplar",
    autor: "Gillian Flynn",
    categoria: "Mistério",
    descrição:
      "Livro de suspense psicológico que segue a história de Amy Dunne, uma mulher desaparecida e seu marido, Nick, que se torna o principal suspeito. Repleto de reviravoltas e manipulações, o livro explora os segredos obscuros de um casamento aparentemente perfeito.",
    imagem: "assets/Imagens/Garota-exemplar.jpg",
  },

          <div className="card">
          <img src="./assets/Imagens/2001-uma-odisseia-no-espaco.png"></img>
          <h2 className="book__title">Teste</h2>
          <h3 className="book__author">Teste</h3>
        </div>
*/
