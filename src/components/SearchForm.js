import React from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import searchResults from './SearchResults';
import SearchResults from './SearchResults';

const SearchForm = ({ search, searchResults, loading }) => {
  
  return (
    <div>
    <Row>
      <Col>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="fist-name-label">First Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="First Name"
            aria-label="First Name"
            aria-describedby="fist-name-label" 
          />
        </InputGroup>
      </Col>
      <Col>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="last-name-label">Last Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Last Name"
            aria-label="Last Name"
            aria-describedby="last-name-label" 
          />
        </InputGroup>
      </Col>
      <Col>
      <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="state-label">State</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="State"
            aria-label="State"
            aria-describedby="state-label" 
          />
        </InputGroup>      
      </Col>
      <Col>
        <Button 
          variant="primary"
          onClick={() => search('elon', 'musk', 'la')}>Search</Button>
      </Col>
    </Row>
    <div className="searchResults">
      <SearchResults searchResults={searchResults} loading={loading}/>
    </div>
    </div>
  )
}

export default SearchForm;