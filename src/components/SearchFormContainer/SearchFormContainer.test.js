import React from 'react';
import renderer from 'react-test-renderer';
import SearchFormContainer from './SearchFormContainer';

describe('SearchFormContainer component', () => {
  it('validateSearch() should set form errors', () => {
    const component = renderer.create(<SearchFormContainer />);
    const testInstance = component.getInstance();

    testInstance.validateSearch('', '', '');
    expect(testInstance.state.formErrors.firstName).toBe(true);
    expect(testInstance.state.formErrors.lastName).toBe(true);
    expect(testInstance.state.formErrors.state).toBe(true);
  })

  it('_search() should fetch data', async (done) => {
    const component = renderer.create(<SearchFormContainer />);
    const testInstance = component.getInstance();
    
    await testInstance._search('jon', 'smith', 'wa');
    expect(testInstance.state.searchResults).toBeDefined();
    done();
  }, 20000)
})