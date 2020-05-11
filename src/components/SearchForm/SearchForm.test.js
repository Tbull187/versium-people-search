import React from 'react';
import SearchForm from './SearchForm';
import renderer from 'react-test-renderer';
import merge from 'lodash/merge';

describe('SearchForm Component', () => {
  it('renders correctly with default props', () => {
    const component = renderer.create(<SearchForm {...defaultProps} />).toJSON();
    expect(component).toMatchSnapshot();
  })
  
  it('renders validation errors', () => {
    const props = merge(defaultProps, {formErrors: {
      firstName: true,
      lastName: true,
      state: true,
    }});
  
    const component = renderer.create(<SearchForm {...props} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  })
})

const defaultProps = {
  searchResults: null,
  validateSearch: () => console.log('validateSearch()'),
  formErrors: {
    firstName: false,
    lastName: false,
    state: false,
  },
  loading: false
};