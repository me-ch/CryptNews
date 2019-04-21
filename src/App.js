import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import PostList from './components/PostList';
import CategoriesList from './components/CategoriesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        filter: {}
    };
  }

  updateFilter(i) {
    console.log('App','updateFilter',i);
    this.setState({filter: i },() => console.log('App','state',this.state))

  }
  render() {
    return (
      <Container fluid className="pt-4">
        <Row>
          <Col sm={2}><CategoriesList filter={this.state.filter} updateFilter={this.updateFilter}/></Col>
          <Col sm={10}><PostList filter={this.state.filter}/></Col>
        </Row>
      </Container>
    )
  }


}

export default App;