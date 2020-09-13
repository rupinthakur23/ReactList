import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({
        posts: res.data.slice(0, 5),
      });
    });
  }
  render() {
    console.log(this.props);
    const { posts } = this.state;
    const postsList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title">{post.title}</span>{" "}
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div className="container">
        <h1 className="center">This is the home Page</h1>
        {postsList}
        <div>
          <h1>Data</h1>
          {this.props.items.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
