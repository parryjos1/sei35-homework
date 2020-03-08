import React from 'react'
import { Link } from 'react-router-dom';

const generateImageURL = (photo, size='q') => {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
};

const FullImage = props => {
  const photo = props.photos.filter( p => p.id === props.match.params.id)[0];
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
      <img src={generateImageURL(photo, 'b')}
           alt={photo.title}
           key={photo.id}
      />
      <br/>
      <Link to="/" style={buttonStyle}>Back</Link>
    </div>
  );
};

export default FullImage;
