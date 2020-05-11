import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const SearchResults = ({ searchResults, loading }) => {
  return (
    <div className='search-results'>
        {loading && 
          <div className="spinner-container">
            <Spinner animation="border" role="status" />
          </div>
        }

        {!loading && searchResults && searchResults.length === 0 &&
         <div className="no-results">No Results Found.</div>
        }

        {searchResults && searchResults.map((result, i) => {
          return (
            <div className='result' key={i}>
              <div className="bold">Result #{i+1}</div>
              <div>First Name: {result.FirstName}</div>
              <div>Last Name: {result.LastName}</div>
              <div>Address: {result.Address}</div>
              <div>City: {result.City}</div>
              <div>State: {result.State}</div>
            </div>
          )
        })}
    </div>
  )
}

export default SearchResults;