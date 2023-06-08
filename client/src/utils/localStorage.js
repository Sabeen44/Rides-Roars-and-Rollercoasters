export const getParks = () => {
  const parks = localStorage.getItem('parks')
    ? JSON.parse(localStorage.getItem('parks'))
    : [];
  
  return parks;
};

export const saveParks = (parkArr) => {
  if (parkArr.length) {
    localStorage.setItem('parks', JSON.stringify(parkArr));
  } else {
    localStorage.removeItem('parks');
  }
};

export const addParkToProfile = (parkId) => {
  const profileParks = localStorage.getItem('profileParks')
    ? JSON.parse(localStorage.getItem('profileParks'))
    : [];

  if (!profileParks.includes(parkId)) {
    profileParks.push(parkId);
    localStorage.setItem('profileParks', JSON.stringify(profileParks));
    return true;
  }

  return false;
};

export const removeParkFromProfile = (parkId) => {
  const profileParks = localStorage.getItem('profileParks')
    ? JSON.parse(localStorage.getItem('profileParks'))
    : [];

  const updatedProfileParks = profileParks.filter((id) => id !== parkId);
  localStorage.setItem('profileParks', JSON.stringify(updatedProfileParks));

  // Remove reviews associated with the park from local storage
  const reviews = localStorage.getItem('reviews')
    ? JSON.parse(localStorage.getItem('reviews'))
    : {};

  delete reviews[parkId];
  localStorage.setItem('reviews', JSON.stringify(reviews));

  return true;
};

export const addReviewToPark = (parkId, reviewId) => {
  const reviews = localStorage.getItem('reviews')
    ? JSON.parse(localStorage.getItem('reviews'))
    : {};

  if (!reviews[parkId]) {
    reviews[parkId] = [];
  }

  reviews[parkId].push(reviewId);
  localStorage.setItem('reviews', JSON.stringify(reviews));

  return true;
};

export const removeReviewFromPark = (parkId, reviewId) => {
  const reviews = localStorage.getItem('reviews')
    ? JSON.parse(localStorage.getItem('reviews'))
    : {};

  if (!reviews[parkId]) {
    return false;
  }

  const updatedReviews = reviews[parkId].filter((id) => id !== reviewId);

  if (updatedReviews.length) {
    reviews[parkId] = updatedReviews;
    localStorage.setItem('reviews', JSON.stringify(reviews));
  } else {
    delete reviews[parkId];
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }

  return true;
};
