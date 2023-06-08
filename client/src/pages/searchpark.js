import { useState } from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { SAVE_PARK } from '../utils/mutations';
import { searchThemeParks } from '../utils/API';
import { saveParkIds, getSavedParkIds } from '../utils/localStorage';
import Auth from '../utils/auth';
import ReviewPark from './reviewpark';

const SearchPark = () => {
  const [searchedParks, setSearchedParks] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [savedParkIds, setSavedParkIds] = useState(getSavedParkIds());
  const [savePark, { error }] = useMutation(SAVE_PARK);
  const [selectedPark, setSelectedPark] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchThemeParks(searchInput);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const { results } = await response.json();

      const parkData = results.map((park) => ({
        parkId: park.id,
        name: park.name,
      }));

      setSearchedParks(parkData);
      setSearchInput('');
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

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      setSavedParkIds([...savedParkIds, parkToSave.parkId]);
      setSelectedPark(parkToSave);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveReview = (review) => {
    // Perform necessary actions to save the review, e.g., make an API call
    console.log('Review:', review);
  };

  return (
    <>
      <Container>
        <h2 className="pt-5">
          {searchedParks.length
            ? `Viewing ${searchedParks.length} results:`
            : 'Search for a theme park to begin'}
        </h2>
        <Row>
          {searchedParks.map((park) => {
            return (
              <Col md="4" key={park.parkId}>
                <Card border="dark">
                  <Card.Body>
                    <Card.Title>{park.name}</Card.Title>
                    {selectedPark && selectedPark.parkId === park.parkId && (
                      <ReviewPark parkId={park.parkId} onSaveReview={handleSaveReview} />
                    )}
                  </Card.Body>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedParkIds?.some((savedParkId) => savedParkId === park.parkId)}
                      className="btn-block btn-info"
                      onClick={() => handleSavePark(park.parkId)}
                    >
                      {savedParkIds?.some((savedParkId) => savedParkId === park.parkId)
                        ? 'Park saved'
                        : 'Save park'
                    }
                    </Button>
                  )}
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SearchPark;