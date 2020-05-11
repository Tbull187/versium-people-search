import React, { useState } from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import SearchResults from '../SearchResults/SearchResults';

const SearchForm = ({ searchResults, validateSearch, formErrors, loading }) => {
  const [ firstName, setFirstName] = useState('');
  const [ lastName, setLastName] = useState('');
  const [ geoState, setGeoState] = useState('');

  return (
    <>
    <Row className="btn-row" xs={1} lg={4}>
      <Col>
        <InputGroup className={formErrors.firstName ? "input-error" : ""}>
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
        {formErrors.firstName && <div className="error-msg">First name must exist</div>}
      </Col>
      <Col>
        <InputGroup className={formErrors.lastName ? "input-error" : ""}>
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
        {formErrors.lastName && <div className="error-msg">Last name must exist</div>}
      </Col>
      <Col>
        <InputGroup className={formErrors.state ? "input-error" : ""}>
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
        {formErrors.state && <div className="error-msg">Geographic state must exist</div>}
      </Col>
      <Col md="auto">
        <Button 
          variant="primary"
          onClick={() => validateSearch(firstName, lastName, geoState)}
          disabled={loading}
        >
          Search
        </Button>
      </Col>
    </Row>
    <SearchResults searchResults={searchResults} loading={loading}/>
    </>
  )
}

export default SearchForm;