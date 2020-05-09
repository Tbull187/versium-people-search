import React, { Component } from 'react';
import SearchForm from './SearchForm';

export default class SearchFormContainer extends Component {
  constructor(props) {
    super(props);
  
    this.baseUrl = 'https://api.datafinder.com/qdf.php?service=phone&k2=9abbxna7d2b65ivia3p9vljs&cfg_maxrecs=100';
    this.proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    this.state = {
      searchResults: [],
      loading: false
     }
  }

  validateSearch() {
    
  }

  async search(firstName, lastName, state) {
    const url = `${this.baseUrl}&d_first=${firstName}&d_last=${lastName}&d_state=${state}`;

    this.setState({ loading: true });

    try {
      const response = await fetch(this.proxyUrl + url);
      if (response.ok) {
        response.json().then(data => {
          console.log(data);
          const searchResults = data.datafinder.results;
          this.setState({ searchResults, loading: false });
        });
      }
    }
    catch(e) {
      console.log(e);
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <SearchForm 
        search={this.search.bind(this)}
        searchResults={this.state.searchResults}
        loading={this.state.loading}
      />
    )
  }
}