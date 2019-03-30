import React, { Component } from 'react';
import R from './Components/R';
import MediaControlCard from './Components/Media';
import Album from './Components/L';
import PlayList from './Components/playlist';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={R} />
          <Route path="/Home" component={R} />
          <Route path="/Media" component={MediaControlCard} />
          <Route path="/Album" component={Album} />
          <Route path="/Playlist" component={PlayList} />
        </div>
      </Router>
    );
  }
}

export default App;
