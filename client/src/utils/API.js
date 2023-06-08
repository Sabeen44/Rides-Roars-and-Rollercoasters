// <<<<<<< feature/utils
// // route to get logged in user's info (needs the token)
// export const getMe = (token) => {
//   return fetch('/api/users/me', {
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const createUser = (userData) => {
//   return fetch('/api/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
// };

// export const loginUser = (userData) => {
//   return fetch('/api/users/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
// };

// // save park data for a logged in user
// export const savePark = (parkData, token) => {
//   return fetch('/api/users/parks', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(parkData),
//   });
// };

// // remove saved park data for a logged in user
// export const deletePark = (parkId, token) => {
//   return fetch(`/api/users/parks/${parkId}`, {
//     method: 'DELETE',
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   });
// };

// // add a review for a park
// export const addReview = (parkId, reviewData, token) => {
//   return fetch(`/api/users/parks/${parkId}/reviews`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(reviewData),
//   });
// };

// // update a review for a park
// export const updateReview = (reviewId, reviewData, token) => {
//   return fetch(`/api/users/reviews/${reviewId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(reviewData),
//   });
// };

// // remove a review for a park
// export const deleteReview = (reviewId, token) => {
//   return fetch(`/api/users/reviews/${reviewId}`, {
//     method: 'DELETE',
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   });
// };

// // make a search for parks
// export const searchParks = (query) => {
//   return fetch(`https://api.themeparks.wiki/docs/v1/#/destinations/${query}`);
// };

// =======
// >>>>>>> main
