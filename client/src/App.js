// <<<<<<< feature/utils
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,} from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// import Navbar from './components/Navbar';
// =======
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// import Navbar from "./components/Navbar";
// >>>>>>> main

const httpLink = createHttpLink({
  uri: "./graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
// <<<<<<< feature/utils
//             <Route 
//               path="/" 
//               element={<SearchBooks />} 
//             />
//             <Route 
//               path="/saved" 
//               element={<SavedBooks />} 
//             />
//             <Route 
//               path="*" 
//               element={<h1 className="display-2">Wrong page!</h1>} 
// =======
//             <Route path="/" element={<SearchBooks />} />
//             <Route path="/saved" element={<SavedBooks />} />
//             <Route
//               path="*"
//               element={<h1 className="display-2">Wrong page!</h1>}
// >>>>>>> main
//             />
//           </Routes>
//         </>
//       </Router>
//     </ApolloProvider>
//   );
// <<<<<<< feature/utils
// };
// =======
// }
// >>>>>>> main

export default App;
