import { useState } from "react";

import Question from "./Question";

import questions from "./data";

const App = () => {
  const [activeId, setActiveId] = useState(1);

  const toggle = id => {
    if (activeId === id) {
      setActiveId(null);
      return;
    }

    setActiveId(id);
  };

  return (
    <main>
      <section className="container">
        <h1>questions</h1>

        {questions.map(ques => (
          <Question
            {...ques}
            key={ques.id}
            activeId={activeId}
            toggle={toggle}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
