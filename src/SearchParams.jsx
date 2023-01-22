import { useState } from "react";
let counter = 0
const SearchParams = () => {
    counter++
  const [location, updateLocation] = useState("");
  return (
    <div className="search-params">

<h2>{counter}</h2>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => updateLocation(e.target.value)}
          />
          ;
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
