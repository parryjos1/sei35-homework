import React, { Component } from 'react';
import ThumbnailGallery from './ThumbnailGallery';
import SearchForm from './SearchForm';

import { Link } from 'react-router-dom';

import axios from 'axios';
const BASE_URL = 'https://api.flickr.com/services/rest';
const API_KEY = '2f5ac274ecfac5a455f38745704ad084';

class SearchResults extends Component {

  // state = {
  //   photos: []
  // };

  componentDidMount() {
    const queryText = this.props.match.params.query;
    const flickrParams = {
      api_key: API_KEY,
      method: 'flickr.photos.search',
      text: queryText,
      format: 'json',
      nojsoncallback: 1,
      page: 1
    };

    // $.getJSON() equivalent in axios:
    axios.get(BASE_URL, { params: flickrParams })
    // axios uses Promises, so we attach .then() instead of .done()
    .then( res => {
      console.log('response:', res);
      //this.setState({ photos: res.data.photos.photo });
      this.props.findPhoto(res.data.photos.photo);
    })
    // axios uses Promises, so we attach .catch() instead of .fail()
    .catch( err => {
      console.warn(err);
    });
  } // componentDidMount()

  showImage = p => {
    const route = `/image/${p.id}`;
    this.props.history.push(route);
  }

  render() {
    const buttonStyle = {
      margin: "20px",
      backgroundColor: "darkgray",
      padding: "10px",
      textDecoration: "none",
      display: "inline-block",
      color: "black",
      fontWeight: "bold"
    }

    return (
      <div>
        <Link to="/" style={buttonStyle}>Back</Link>
        <br />
        <div>
          {
            // We can't use an 'if' statement in JSX curly tags, so if you want the behaviour
            // of an if statement (render some tag only when some condition is true), you can
            // use the '&&' operator to get that behaviour. It's allowed because it's an expression.
            (this.props.photos.length > 0) && <ThumbnailGallery photos={this.props.photos} onClickImage={this.showImage} />
          }
        </div>
      </div>
    );
  }
}

export default SearchResults;
