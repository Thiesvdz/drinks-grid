import "./Productpage.css";
import NavProduct from "../NavProduct/NavProduct";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const Productpage = (props) => {
  
  useEffect(() => {
    window.scrollTo(0,0)
  })

  // const {type} = useParams()
  // if(type === "wine"){
  //   document
  //   .getElementsByName('meta')
  //   .namedItem('description')
  //   .setAttribute('content', 'Add wine to cart!')
  // }
  const toBeRendered = props.drinkFromHomepage.map((drink) => {
    return (
      <li className="product__li" key={drink.name}>
        <img src={drink.image} alt={drink.alt} />
        <p className="product__p">{drink.name}</p>
        <p className="product__p">{drink.desc}</p>
        <button onClick={props.addCounterButton}>Add to cart</button>
      </li>
    );
  });

  return (
    <>
    <NavProduct counter={props.counter}></NavProduct>
    <article className="product__article">
      <ul className="product__ul">{toBeRendered}</ul>
    </article>
    </>
  );
};

export default Productpage;
