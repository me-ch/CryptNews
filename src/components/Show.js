import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {},
      key: ''
    };
  }

  componentDidMount() {
    // ref.get().then((doc) => {
    //   if (doc.exists) {
    //     this.setState({
    //       post: doc.data(),
    //       key: doc.id,
    //       isLoading: false
    //     });
    //   } else {
    //     console.log("No such document!");
    //   }
    // });
  }


  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">post List</Link></h4>
            <h3 class="panel-title">
              {this.state.post.title}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Description:</dt>
              <dd>{this.state.post.description}</dd>
              <dt>Author:</dt>
              <dd>{this.state.post.author}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
          </div>
        </div>
      </div>
    );
  }
}

export default Show;