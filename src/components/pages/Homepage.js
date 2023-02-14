import "../App/App.css";
import GalleryCard from "../GalleryCard/GalleryCard";
import itemsFromData from "../../data/items";
import FilterBar from "../FilterBar/FilterBar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Homepage(props) {
  const [drinks, setDrinks] = useState([]);
  const [defaultDrinks, setDefaultDrinks] = useState([]);

  useEffect(() => {
    setDrinks(itemsFromData);
    /*Iterator om te kijken welke kaart welke is */
    let i = 0;
    let types = ["wine", "whiskey", "beer"];


    const onGalleryCardClicked = (drink) =>{
      props.onGalleryCardClicked(drink)
    }

    const galleryCardToBeRendered = itemsFromData.map((drink) => {
      let temp = (<Link onClick={()=>onGalleryCardClicked(drink)} to={`/product/${types[i]}`} types={types[i]} key={types[i]}><GalleryCard  drinks={drink} /></Link>);
      i = i + 1;
      return temp;
    });

    setDrinks(galleryCardToBeRendered);
    setDefaultDrinks(galleryCardToBeRendered);

  }, []);

  const onFilter = (typeToBeFiltered) => {
    const copy = [...defaultDrinks]
    const cardToBeRendered = copy.filter(card=>{
      if(card.props.types === typeToBeFiltered){
        return card
      }
    });
    setDrinks([cardToBeRendered]);
  };

  return (
    <>
      <FilterBar onFilter={onFilter} counter={props.counter} />
      {drinks}
      {/* <GalleryCard drinks={items.wine} />
      <GalleryCard drinks={items.whiskey} />
      <GalleryCard drinks={items.beer} /> */}
    </>
  );
}

export default Homepage;
