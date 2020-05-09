import React from 'react';

const SearchResults = ({ searchResults, loading }) => {
  return (
    <div className='search-results'>
        {loading && <h2>Loading...</h2>}

        {searchResults.map(result => {
          return (
            <div className='result'>
              <div>First Name: {result.FirstName}</div>
              <div>Last Name: {result.LastName}</div>
              <div>City: {result.City}</div>
              <div>State: {result.State}</div>
            </div>
          )
        })}
    </div>
  )
}

export default SearchResults;