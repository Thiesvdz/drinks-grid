import "./GalleryCard.css";
import getToBeRenderdFigures from "./helpers/GalleryCardHelpers"

const GalleryCard = (props) => {
  // console.log(props.types)h
  return <article className="gallery__Card">{getToBeRenderdFigures(props.drinks)}</article>;
};

export default GalleryCard;
