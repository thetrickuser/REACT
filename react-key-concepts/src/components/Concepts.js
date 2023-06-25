import ConceptItem from "./ConceptItem";

function Concepts({ conceptsData }) {
  return (
    <ul id="concepts">
      {conceptsData.map((concept) => (
        <ConceptItem
          image={concept.image}
          title={concept.title}
          desc={concept.description}
        />
      ))}
    </ul>
  );
}

export default Concepts;
