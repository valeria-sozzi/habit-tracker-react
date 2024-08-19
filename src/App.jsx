import { useState } from "react";
import "./App.scss";

function App() {
  const [habits, setHabits] = useState([
    { name: "Fare esercizio fisico", count: 3 },
    { name: "Leggere un libro", count: 1 },
    { name: "Meditazione", count: 5 },
  ]);

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="app-container">
      <div className="habit">
        <label htmlFor="new-habit">Nuova abitudine</label>
        <input
          type="text"
          name="new-habit"
          id="new-habit"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={() => {
            //creo un nuovo oggetto
            const newHabit = { name: inputValue, count: 0 };

            //creo un nuovo array con l'aggiunta del nuovo oggetto
            const newHabits = [...habits, newHabit];

            //modifico lo stato dell'array iniziale
            setHabits(newHabits);
          }}
        >
          Aggiungi nuova abitudine
        </button>
      </div>

      {/* stampiamo la lista a schermo */}
      <ul>
        {
          /* facciamo un ciclo suoi dati per creare il nostro item */
          habits.map((habit, currentIndex) => (
            <li key={currentIndex}>
              {habit.name}
              <span> conteggio: {habit.count}</span>
              <button
                onClick={() => {
                  //incrementare il contatore dell'abitudine corrente

                  //devo creare un nuovo array
                  const newHabits = [...habits];

                  //ciclo nell'array per comparare la posizione dell'index
                  newHabits.map((habit, index) => {
                    if (currentIndex === index) {
                      //trovato l'elemento nella posizione corrente incremento il conteggio di uno
                      habit.count += 1;
                    }
                  });

                  //faccio il setHabits con il nuovo array
                  setHabits(newHabits);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  //decrementare il contatore dell'abitudine corrente

                  //devo creare un nuovo array
                  const newHabits = [...habits];

                  //ciclo nell'array per comparare la posizione dell'index
                  newHabits.map((habit, index) => {
                    if (currentIndex === index) {
                      //trovato l'elemento nella posizione corrente decrementare il conteggio di uno
                      habit.count -= 1;
                    }
                  });

                  //faccio il setHabits con il nuovo array
                  setHabits(newHabits);
                }}
              >
                -
              </button>
              <button
                onClick={() => {
                  //resettare il contatore dell'abitudine corrente

                  //devo creare un nuovo array
                  const newHabits = [...habits];

                  //ciclo nell'array per comparare la posizione dell'index
                  newHabits.map((habit, index) => {
                    if (currentIndex === index) {
                      //trovato l'elemento nella posizione corrente resetto il conteggio
                      habit.count = 0;
                    }
                  });

                  //faccio il setHabits con il nuovo array
                  setHabits(newHabits);
                }}
              >
                reset
              </button>
              <span
                onClick={() => {
                  //devo creare un nuovo array
                  const newHabits = [...habits];
                  //uso splice nell'array nuovo per rimuovere il solo elemento corrente
                  newHabits.splice(currentIndex, 1);
                  //faccio il setHabits con il nuovo array
                  setHabits(newHabits);
                }}
              >
                X
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
