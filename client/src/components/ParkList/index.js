import React from "react";

const ParkList = ({ parks }) => {
  if (!parks.length) {
    return <h3>No Parks Found</h3>;
  }

  return (
    <div>
      {parks &&
        parks.map((park) => (
          <div key={park._id} className="card mb-3">
            <h4>
              {park.title} <br />
            </h4>
            <div className="card-body bg-light p-2">
              <p>{park.description}</p>
              <img
                src={park.image}
                alt="ROLLERCOASTER"
                width="400"
                height="300"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ParkList;
