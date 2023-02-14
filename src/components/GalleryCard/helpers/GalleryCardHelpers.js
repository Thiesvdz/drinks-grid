function getToBeRenderdFigures(drinks) {
  let iterator = 1;
  let classToBeAdded = "";
  let drinksToBeRenderd = drinks.map((drink) => {
    switch (iterator) {
      case 1:
        classToBeAdded = "gallery__figure gallery__figure--big";
        break;
      case 2:
        classToBeAdded = "gallery__figure gallery__figure--medium";
        break;
      case 3:
        classToBeAdded = "gallery__figure gallery__figure--medium";
        break;
      default:
        classToBeAdded = "gallery__figure gallery__figure--small";
        break;
    }

    iterator += 1;
    return (
      <figure className={classToBeAdded} key={drink.id}>
        <img className="wine__grid--image" src={drink.image} alt={drink.alt} />
      </figure>
    );
  });
  iterator = 1;
  return drinksToBeRenderd;
}
export default getToBeRenderdFigures;
