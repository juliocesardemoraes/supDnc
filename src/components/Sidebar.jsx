import { useState } from "react";
import Button from "./Button";
import "./sidebar.scss";

export default function Sidebar() {
  const [buttonSelected, setButtonSelected] = useState(null);
  return (
    <aside>
      <div className="container__row sidebar__row">
        <img src="./book_hub.png"></img>
        <h2>Book Hub</h2>
      </div>
      <div className="container__row sidebar__row">
        <img src="./profile.png"></img>
        <h1>Júlio Moraes</h1>
      </div>
      <div className="container__column">
        <Button
          text={"Livros"}
          isSelected={buttonSelected === 1 ? true : false}
          selectFunction={() => {
            setButtonSelected(1);
          }}
        ></Button>
        <Button
          text={"Ja li"}
          isSelected={buttonSelected === 2 ? true : false}
          selectFunction={() => {
            setButtonSelected(2);
          }}
        ></Button>
        <Button
          text={"Quero Ler"}
          isSelected={buttonSelected === 3 ? true : false}
          selectFunction={() => {
            setButtonSelected(3);
          }}
        ></Button>
      </div>
    </aside>
  );
}
