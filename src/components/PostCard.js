import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import _ from 'lodash';

class PostCard extends Component {
    render() {
        const truncate = (el) => _.truncate(el, { 'length': 50, 'separator': '...' });
        return (
            <Card>
                <Card.Img variant="top" src={this.props.post.image} />
                <Card.Body>
                    <Card.Title>{this.props.post.title} - {this.props.post.author}</Card.Title>
                    <Card.Subtitle>{this.props.post.author}</Card.Subtitle>
                    <Card.Text>
                        {truncate(this.props.post.description)}
                    </Card.Text>
                    <Card.Link href={`/show/${this.props.post.key}`}>Card Link</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}

export default PostCard;