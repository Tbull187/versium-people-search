import React from 'react';
import logo from './logo.svg';
import { Container, Row, Col } from 'react-bootstrap';
import SearchFormContainer from './components/SearchFormContainer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col><h1>Welcome to Versium People Search</h1></Col>
        </Row>

        <SearchFormContainer />

      </Container>
    </div>
  );
}

export default App;
