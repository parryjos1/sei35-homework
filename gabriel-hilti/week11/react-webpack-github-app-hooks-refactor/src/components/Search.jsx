import React, { useState } from 'react';

export const Search = props => {

  const [ username, setUsername ] = useState('');

  const handleChange = e => setUsername( e.target.value );

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push(`/profile/${username}`);
  };



  return (
    <div>
      <h2>Search GitHub by Username</h2>
      <hr />

      <form onSubmit={ handleSubmit }>
        <input type="text" placeholder="Username" onChange={ handleChange } />
        &nbsp;
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};


// export class Search extends Component {
//
//   state = {
//     username: ''
//   }
//
//   handleChange = e => {
//     // console.log(e.target.value);
//     this.setState({username: e.target.value});
//   }
//
//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.state.username);
//     this.props.history.push(`/profile/${this.state.username}`);
//
//   }
//
//   render() {
//     return (
//       <div>
//         <h2>Serach GitHub by Username</h2>
//         <hr />
//
//         <form onSubmit={ this.handleSubmit }>
//           <input type="text" placeholder="Username" onChange={ this.handleChange }/>
//           &nbsp;
//           <input type="submit" value="Search" />
//         </form>
//       </div>
//     );
//   } // render()
// }

// export default Search;
