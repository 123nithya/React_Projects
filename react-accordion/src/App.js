import "./App.css";
import { useState } from "react";

function App() {
  const data = [
    {
      question: "Question 1",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim natus dolor qui quibusdam atque sunt quo dicta quod a. Consequuntur quidem eaque labore temporibus iure illum dignissimos ad nemo aspernatur, obcaecati suscipit molestias. Beatae officiis dolorem ipsam eaque iure ex magnam. Libero architecto ea dolore possimus exercitationem! Fugit, repudiandae",
    },
    {
      question: "Question 2",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim natus dolor qui quibusdam atque sunt quo dicta quod a. Consequuntur quidem eaque labore temporibus iure illum dignissimos ad nemo aspernatur, obcaecati suscipit molestias. Beatae officiis dolorem ipsam eaque iure ex magnam. Libero architecto ea dolore possimus exercitationem! Fugit, repudiandae",
    },
    {
      question: "Question 3",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim natus dolor qui quibusdam atque sunt quo dicta quod a. Consequuntur quidem eaque labore temporibus iure illum dignissimos ad nemo aspernatur, obcaecati suscipit molestias. Beatae officiis dolorem ipsam eaque iure ex magnam. Libero architecto ea dolore possimus exercitationem! Fugit, repudiandae",
    },
    {
      question: "Question 4",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim natus dolor qui quibusdam atque sunt quo dicta quod a. Consequuntur quidem eaque labore temporibus iure illum dignissimos ad nemo aspernatur, obcaecati suscipit molestias. Beatae officiis dolorem ipsam eaque iure ex magnam. Libero architecto ea dolore possimus exercitationem! Fugit, repudiandae",
    },
    {
      question: "Question 5",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim natus dolor qui quibusdam atque sunt quo dicta quod a. Consequuntur quidem eaque labore temporibus iure illum dignissimos ad nemo aspernatur, obcaecati suscipit molestias. Beatae officiis dolorem ipsam eaque iure ex magnam. Libero architecto ea dolore possimus exercitationem! Fugit, repudiandae",
    },
  ];

  const [select, setSelect] = useState(null);

  const toggle = (i) => {
    if (select === i) {
      return setSelect(null);
    }

    setSelect(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{select === i ? "-" : "+"}</span>
            </div>
            <div className={select === i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
