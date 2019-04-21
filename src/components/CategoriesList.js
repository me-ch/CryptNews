import React from 'react';
import { ListGroup, Container, Spinner } from 'react-bootstrap';
import {withRouter}  from 'react-router-dom'
import _ from 'lodash';
const API_URL = process.env.REACT_APP_API_URL;
const ENTITIES = 'categories';
const API_PATH = [API_URL, ENTITIES].join('/');

class CategoriesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            filter: this.props.filter
        };
    }
    componentWillMount() {
        fetch(API_PATH)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    getActiveClass = (filter) => {
        console.log('CategoriesList','getActiveClass',this.state.filter,filter);
        return this.state.filter && _.isEqual(this.state.filter,filter) ? 'active' : '';
    }
    render() { 
        const categories = (items,updateFilter) => {
            return (
                <Container>
                    <h3>Categories</h3>
                    <ListGroup>
                        <ListGroup.Item action className={this.getActiveClass({})} onClick={updateFilter.bind(this,{})}>All</ListGroup.Item>
                        {items.map(category => 
                        <ListGroup.Item key={category.id} action onClick={updateFilter.bind(this,{"categoryId":category.id})} className={this.getActiveClass({"categoryId":category.id})}>{category.title}</ListGroup.Item>
                        )}
                    </ListGroup>
                </Container>
            )
        }
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <Container fluid><Spinner animation="border" variant="primary" /> Loading...</Container>
        } else {
            return categories(items, this.props.updateFilter)
        }
    }
}

export default withRouter(CategoriesList);
