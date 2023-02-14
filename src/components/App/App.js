import "./App.css";
import Homepage from "../pages/Homepage";
import Productpage from "../pages/Productpage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
function App(props) {

  const [drinkFromHomepage, setDrinkFromHomepage] = useState([])
  const [counter, setCounter] = useState(0);

  const addCounterButton = () => {
    setCounter(counter + 1)
  }

  const onGalleryCardClicked = (drink) =>{
    setDrinkFromHomepage(drink);
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage onGalleryCardClicked={onGalleryCardClicked} counter={counter} /> }> </Route>
        <Route path="/product/:type" element={<Productpage drinkFromHomepage={drinkFromHomepage} addCounterButton={addCounterButton} counter={counter}/>}> </Route>
      </Routes>
    </>
  );
}

export default App;
