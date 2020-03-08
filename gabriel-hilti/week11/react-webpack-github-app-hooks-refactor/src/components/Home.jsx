import React from 'react';
import axios from 'axios';
import ajax from '../lib/ajax';

import { Link } from 'react-router-dom';

const Home = props => {

  const handleClick = e => {
    console.log('click');
    ajax.getRandomUser()
      .then(res => {
        console.log('promise:', res);
        const username = res.login;
        console.log(username);
        props.history.push(`/profile/${username}`);
      });
    //ajax.getRandomUser().then(res => res.data.login)
  };

  return (
    <div>
      <h1>GitHub Search</h1>
      <hr />

      <Link to="/search">
        <button>Search for a user</button>
      </Link>

      &nbsp;

      <button onClick={handleClick}>Random User</button>
    </div>
  );
};

export default Home;
