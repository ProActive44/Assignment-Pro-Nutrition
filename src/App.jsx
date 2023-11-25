import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import FoodData from "./resources/FoodData";
import Search from "./components/Search";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <div>
        <Search handleChange={handleChange} />
      </div>
      <div>
        {FoodData.filter((item) => {
          if (searchInput === "") {
            return item;
          } else if (
            item.name.toLowerCase().includes(searchInput.toLowerCase())
          ) {
            return item;
          }
        }).map((item) => {
          return (
            <div key={item.id}>
              <FoodBox food={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
