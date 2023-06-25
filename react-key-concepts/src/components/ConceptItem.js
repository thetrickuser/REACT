function ConceptItem({ image, title, desc }) {
  return (
    <li className="concept">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  );
}

export default ConceptItem;
