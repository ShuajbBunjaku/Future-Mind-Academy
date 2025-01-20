import Card from "../Card/Card";
import "./Accordion.css";
import { useState } from "react";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  let facts = [
    {
      title: "Kosova",
      description: "A country in south-eastern europe",
    },

    {
      title: "Albania",
      description: "Nice EBaches",
    },

    {
      title: "Greece",
      description: "Something about greece",
    },
  ];

  return (
    <>
      <div className="Accordion">
        {facts.map((fact, index) => (
          <Card
            title={fact.title}
            description={fact.description}
            isOpen={index === openIndex}
            handleClick={() => {
              setOpenIndex(index);
            }}
          />
        ))}
      </div>
    </>
  );
}

export default Accordion;
