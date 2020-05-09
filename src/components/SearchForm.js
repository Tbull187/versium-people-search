import React, { useState } from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import SearchResults from './SearchResults';

const SearchForm = ({ search, searchResults, loading }) => {
  const [ firstName, setFirstName] = useState('');
  const [ lastName, setLastName] = useState('');
  const [ geoState, setGeoState] = useState('');

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
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            disabled={loading}
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
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            disabled={loading}
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
            value={geoState}
            onChange={e => setGeoState(e.target.value)}
            disabled={loading}
          />
        </InputGroup>      
      </Col>
      <Col>
        <Button 
          variant="primary"
          onClick={() => search(firstName, lastName, geoState)}
          disabled={loading}
        >
          Search
        </Button>
      </Col>
    </Row>
    <div className="searchResults">
      <SearchResults searchResults={searchResults} loading={loading}/>
    </div>
    </div>
  )
}

export default SearchForm;