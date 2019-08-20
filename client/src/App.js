import React, {Components, useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {Route} from "react-router-dom";
import MovieList from "./Movies/MovieList.js";
import Movie from "./Movies/Movie"

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} />
        <Route exact path = "/" component = {MovieList} />
        <Route exact path = "/movie/:id" render= {props => <Movie {...props} addToSavedList={addToSavedList}/>} />

      </div>
    </Router>
  );
};

export default App;
