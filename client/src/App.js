import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Join from "./components/join/join"

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <Join/>
      </Route>
    </div>
  );
};

export default App;