import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import FullImage from './FullImage';
import ThumbnailGallery from './ThumbnailGallery';

import {
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';

class FlickrSearch extends React.Component {

  state = {
    photos: []
  };

  updatePhotos = photos => {
    this.setState({photos: photos});
    console.log('update', this.state.photos);
  }



  render() {
    return (
      <div className="App">
        <h1>Flickr Search</h1>
        <Router>
          <Route exact path="/" component={SearchForm} />
          <Route exact path="/search/:query" render={(props) => <SearchResults {...props} findPhoto={this.updatePhotos} photos={this.state.photos} />} />
          <Route exact path="/image/:id" render={(props) => <FullImage {...props}
          photos={this.state.photos} />} />
        </Router>
      </div>
    );
  }
} // class FlickrSearch

export default FlickrSearch;
