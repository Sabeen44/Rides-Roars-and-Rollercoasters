import React, { useState } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { SAVE_PARK } from "../utils/mutations";
import {
  addParkToProfile,
  removeParkFromProfile,
  getSavedParkIds,
} from "../utils/localStorage";
import Auth from "../utils/auth";
//import ReviewPark from "./ReviewPark";

import { useQuery } from "@apollo/client";
import ParkList from "../components/ParkList";
import { QUERY_PARKS } from "../utils/queries";

const SearchPark = () => {
  const [searchedParks, setSearchedParks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [savedParkIds, setSavedParkIds] = useState(getSavedParkIds());
  const [savePark, { error }] = useMutation(SAVE_PARK);
  const [selectedPark, setSelectedPark] = useState(null);

  const { loading, data } = useQuery(QUERY_PARKS);

  const parks = data?.parks || [];

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      // Use useQuery hook to fetch parks data

      // Filter out parks that match searchInput
      const filteredParks = parks.filter((park) =>
        park.title.toLowerCase().includes(searchInput.toLowerCase())
      );

      // Update searchedParks state with filteredParks
      setSearchedParks(filteredParks);

      // Clear searchInput state
      setSearchInput("");

      //const { results } = await response.json();

      //const parkData = results.map((park) => ({
      //  parkId: park.id,
      //  name: park.name,
      //  }));

      // setSearchedParks(parkData);
      // setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSavePark = async (parkId) => {
    const parkToSave = searchedParks.find((park) => park.parkId === parkId);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await savePark({
        variables: { input: parkToSave },
      });

      if (!response.data) {
        throw new Error("Something went wrong!");
      }

      addParkToProfile(parkToSave.parkId);
      setSelectedPark(parkToSave);
      setSavedParkIds(getSavedParkIds()); // Update the saved park IDs
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveReview = (review) => {
    // Perform necessary actions to save the review, e.g., make an API call
    console.log("Review:", review);
  };

  const handleRemovePark = async (parkId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removeParkFromProfile(parkId);

      if (selectedPark && selectedPark.parkId === parkId) {
        setSelectedPark(null);
      }

      setSavedParkIds(getSavedParkIds()); // Update the saved park IDs
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Container>
        <h2 className="pt-5">
          {searchedParks.length
            ? `Viewing ${searchedParks.length} results:`
            : "RIDES, ROARS AND ROLLERCOASTERS"}
        </h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label>Search Parks</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a park name"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        <Row>
          {searchedParks.map((park) => {
            return (
              <main>
                <div className="flex-row justify-center">
                  <div className="col-12 col-md-8 mb-3">
                    {/* If the data is still loading, render a loading message */}
                    {loading ? (
                      <div>Loading...</div>
                    ) : (
                      <ParkList parks={parks} title="SOme title" />
                    )}
                  </div>
                </div>
              </main>

              // <Col md="4" key={park.parkId}>
              //   <Card border="dark">
              //     <Card.Body>
              //       <Card.Title>{park.name}</Card.Title>
              //       {selectedPark && selectedPark.parkId === park.parkId && (
              //         <ReviewPark
              //           parkId={park.parkId}
              //           onSaveReview={handleSaveReview}
              //         />
              //       )}
              //     </Card.Body>
              //     {Auth.loggedIn() && (
              //       <>
              //         <Button
              //           disabled={savedParkIds?.some(
              //             (savedParkId) => savedParkId === park.parkId
              //           )}
              //           className="btn-block btn-info"
              //           onClick={() => handleSavePark(park.parkId)}
              //         >
              //           {savedParkIds?.some(
              //             (savedParkId) => savedParkId === park.parkId
              //           )
              //             ? "Park saved"
              //             : "Save park"}
              //         </Button>
              //         <Button
              //           className="btn-block btn-danger"
              //           onClick={() => handleRemovePark(park.parkId)}
              //         >
              //           Remove park
              //         </Button>
              //       </>
              //     )}
              //   </Card>
              // </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SearchPark;
