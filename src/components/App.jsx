import React, { useState } from "react";
import Nav from "./Nav";
import FilterSortControls from "./FilterSortControls";
import HogCard from "./HogCard";
import HogForm from "./HogForm";
import initialHogs from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(initialHogs);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("all");
  const [hiddenHogNames, setHiddenHogNames] = useState([]);

  function handleAddHog(newHog) {
    setHogs([...hogs, newHog]);
  }

  function handleHideHog(name) {
    setHiddenHogNames([...hiddenHogNames, name]);
  }

  // Chain filtering and sorting operations sequentially
  const visibleHogs = hogs
    .filter((hog) => !hiddenHogNames.includes(hog.name))
    .filter((hog) => (showGreasedOnly ? hog.greased : true))
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "weight") {
        return a.weight - b.weight;
      }
      return 0;
    });

  return (
    <div className="App ui container" style={{ paddingBottom: "50px" }}>
      <Nav />
      
      <HogForm onAddHog={handleAddHog} />
      
      <FilterSortControls 
        showGreasedOnly={showGreasedOnly}
        onToggleGreased={setShowGreasedOnly}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="ui grid container stackable" style={{ marginTop: "20px" }}>
        {visibleHogs.map((hog) => (
          <HogCard 
            key={hog.name} 
            hog={hog} 
            onHideHog={handleHideHog} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;