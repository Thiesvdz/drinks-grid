import "./FilterBar.css";
import { useState, useEffect } from "react";

const FilterBar = ({ onFilter, counter }) => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    let toBeRenderedLabels = [
      {
        name: "wine",
        unchecked: "",
        checked: "unchecked",
        id: 0,
      },
      {
        name: "whiskey",
        unchecked: "",
        checked: "unchecked",
        id: 1,
      },
      {
        name: "beer",
        unchecked: "",
        checked: "unchecked",
        id: 2,
      },
    ];

    setLabels(toBeRenderedLabels);
  }, []);

  const toBeRenderedLabels = labels.map((label) => {
    let input = (
      <input
        checked={label.unchecked}
        type="checkbox"
        id={label.name}
        className="filerBar--checkbox"
        onChange={() => filterDrink(label.name)}
      ></input>
    );
    if (label.checked === "checked") {
      input = (
        <input
          checked={label.checked}
          type="checkbox"
          id={label.name}
          className="filerBar--checkbox"
          onChange={() => filterDrink(label.name)}
        ></input>
      );
    }
    return (
      <div className="filterbar__input--wrapper" key={label.id}>
        {input}
        <label htmlFor={label.name}>{label.name}</label>
      </div>
    );
  });

  const filterDrink = (filter) => {
    const copy = [...labels];
    const newState = copy.map((label) => {
      if (label.name !== filter) {
        label.checked = "unchecked";
      }
      if (label.name === filter) {
        label.checked = "checked";
      }
      return label;
    });
    setLabels(newState);
    onFilter(filter);
  };

  return (
    <section className="filterBar">
      <div className="filterBar--wrapper">
        {toBeRenderedLabels}
        <div className="counter--wrapper">
          <div className="counter">{counter}</div>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
