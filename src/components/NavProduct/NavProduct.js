import "./NavProduct.css";
import "../FilterBar/FilterBar.css"
const NavProduct = (props) => {
  return (
    <nav className="NavProduct">
      <div className="counter--wrapper">
          <div className="counter counter--pro">{props.counter}</div>
        </div>
      <h1 className="NavProduct__h1">Product page</h1>
    </nav>
  );
};

export default NavProduct;
