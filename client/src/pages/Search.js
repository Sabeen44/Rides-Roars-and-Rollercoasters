import React, { useState, useEffect } from "react";

function Fetchparks() {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch("https://api.themeparks.wiki/preview/parks")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setParks(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <input type="text" placeholder="Search..." />
      <button>Search</button>
      <ul>
        {data.map((item) => (
          <li key={park.id}>{park.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fetchparks;
