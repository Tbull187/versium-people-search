import React from 'react';
import SearchResults from './SearchResults';
import Spinner from 'react-bootstrap/Spinner';
import renderer from 'react-test-renderer';
import merge from 'lodash/merge';

describe('SearchResults Component', () => {
  it('should render results in a list', () => {
    const component = renderer.create(<SearchResults {...defaultProps} />).toJSON();
    expect(component).toMatchSnapshot();
  })

  it('should render a loading spinner', () => {
    const props = merge(defaultProps, {loading: true});
    const component = renderer.create(<SearchResults {...props}/>);

    const testInstance = component.root;
    expect(testInstance.findByType(Spinner))
  })
})

const defaultProps = {
  loading: false,
  searchResults: [
    {
      FirstName: 'Jon',
      LastName: 'Smith',
      Address: '123 Street',
      City: 'Seattle',
      State: 'WA'
    }
  ]
}