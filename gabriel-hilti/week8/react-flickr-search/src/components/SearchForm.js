import React from 'react';

class SearchForm extends React.Component {

  state = {
    searchQuery: ''
  };

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  }

  handleSubmit = (event) => {
    console.log('Form submitted!');

    // Stop the form submit from actually reloading the page
    event.preventDefault();

    console.log('searchQuery:', this.state.searchQuery);

    // Send the inputted text up to the parent,
    // by calling the method the parent passed
    // down to us as a prop, with the text
    // as argument

    //this.props.onSubmit( this.state.searchQuery );
    const route = `/search/${this.state.searchQuery}`;
    this.props.history.push(route);
  }  // handleSubmit()

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={ this.handleChange } />
        <input type="submit" value="Search" />
      </form>
    );
  }  // render()
}  // class SearchForm

export default SearchForm;
