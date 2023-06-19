import { useState } from "react";
import "../src/style.css";
import Die from "../Die";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => <Die value={die.value} />);

  return (
    <>
      <div className="container">
        <main>
          <div className="dice-container">{diceElements}</div>
          <button className="roll-dice" onClick={rollDice}>
            Roll
          </button>
        </main>
      </div>
    </>
  );
}

export default App;
