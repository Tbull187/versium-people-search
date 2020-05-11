import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import { get, isEmpty } from 'lodash';
import { proxyUrl } from '../../utils/utils';

export default class SearchFormContainer extends Component {
  constructor(props) {
    super(props);
    this.baseUrl = 'https://api.datafinder.com/qdf.php?service=phone&k2=9abbxna7d2b65ivia3p9vljs&cfg_maxrecs=100';

    this.state = {
      searchResults: null,
      loading: false,
      formErrors: {
        firstName: false,
        lastName: false,
        state: false
      }
     }
  }

/* Another approach to validation could be to wire-up the validation function call
    to the onChange handlers of the various input fields. This approach would provide 
    validation in "real-time" as the user typed. */
  validateSearch(firstName, lastName, state) {
    const errors = new Set();

    if (isEmpty(firstName)) {
      errors.add('firstName');
    }
    if (isEmpty(lastName)) {
      errors.add('lastName');
    }
    if (isEmpty(state)) {
      errors.add('state');
    }

    this.setState({
      formErrors: {
        firstName: errors.has('firstName'),
        lastName: errors.has('lastName'),
        state: errors.has('state')
      }
    })

    if (errors.size === 0) {
      this._search(firstName, lastName, state);
    }

  }

  async _search(firstName, lastName, state) {
    const url = `${this.baseUrl}&d_first=${firstName}&d_last=${lastName}&d_state=${state}`;

    this.setState({ loading: true, searchResults: null });
    try {
      const response = await fetch(proxyUrl + url);
      if (response.ok) {
        response.json().then(data => {
          const searchResults = get(data, 'datafinder.results', []);
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
        validateSearch={this.validateSearch.bind(this)}
        searchResults={this.state.searchResults}
        loading={this.state.loading}
        formErrors={this.state.formErrors}
      />
    )
  }
}