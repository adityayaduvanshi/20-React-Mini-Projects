import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const deleteHandler = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List myPeople={people} />
        <button onClick={deleteHandler} type="click">
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
