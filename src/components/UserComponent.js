import React, { Component } from "react";
import { connect } from "react-redux";

class UserComponent extends Component {
  render() {
    return (
      <div>
        <h1>User Information</h1>
        <p>counter- {this.props.xyz}</p>
        <p>
          isAth-{" "}
          {this.props.isAuth ? (
            <div>Welcome User</div>
          ) : (
            <div>Welcome Guest</div>
          )}
        </p>
        <button onClick={this.props.increase}>Increment</button>
        <button onClick={this.props.decrease}>Increment</button>
      </div>
    );
  }
}
//mapStateToProps // store state => compo props
const mapStateToProps = (state) => {
  return {
    xyz: state.counter,
    isAuth: state.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: "INC_COUNTER" }),
    decrease: () => dispatch({ type: "DEC_COUNTER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
