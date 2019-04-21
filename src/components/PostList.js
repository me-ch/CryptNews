import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import {withRouter}  from 'react-router-dom'
import { Container, Col, Row,Spinner,Button } from 'react-bootstrap'
import PostCard from './PostCard';
import _ from 'lodash';
const API_URL = process.env.REACT_APP_API_URL;
const ENTITIES = 'posts';
const API_PATH = [API_URL,ENTITIES].join('/');
class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            filter: props.filter
        };
    }
    componentWillMount() {
        fetch(API_PATH)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({isLoaded: true,items: result});
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    itemsFiltered = () => {
        console.log('itemsFiltered', this.state.items, this.state.filter);
        return this.state.filter && Object.keys(this.state.filter).length > 0 ? _.filter(this.state.items,this.state.filter) : this.state.items;
    }
    render() { 
        const posts = (items,filter) => {
            return (
                <Container>
                    <h3>{ENTITIES.toUpperCase()} LIST</h3>
                    <LinkContainer to="/create"><Button variant="primary">Add Post</Button></LinkContainer>
                    <Container>
                        <Row>{this.itemsFiltered().map(post =><Col sm={4} key={post.id}><PostCard post={post} /></Col>)}</Row>
                    </Container>
                </Container>
            );
        }

        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div><Spinner animation="border" variant="primary" />Loading...</div>
        } else {
            return posts(items, this.state.filter)
        }

    }
}

export default withRouter(PostList);