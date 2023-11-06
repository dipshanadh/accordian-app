import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = props => {
  const { id, title, info, activeId, toggle } = props;

  const open = activeId === id;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggle(id)}>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {open && <p>{info}</p>}
    </article>
  );
};

export default Question;
