import React, { Component } from "react";
import { connect } from "react-redux";

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
    };
  }
  changeHandler = (event) => {
    this.setState({ itemName: event.target.value });
  };
  addItem = () => {
    this.props.increase(this.state.itemName);
    sessionStorage.setItem("items", this.props.items);
    this.setState({ itemName: "" });
  };

  deleteItem =() =>{
    this.props.decrease();
    
  }
  render() {
    console.log(this.props);
    return (
      <>
        <div>Notification</div>

        <input
          type="text"
          value={this.state.itemName}
          onChange={this.changeHandler}
        />
        <button onClick={this.addItem}>Add Item</button>
        {this.props.items.map((item) => {
          return <p key={item}>{item}
          <button onClick={this.deleteItem}> Delete Item </button>
          </p>;
        })}
        <p>Counter: {this.props.counter}</p>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    counter:state.counter,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    increase: (name) => dispatch({ type: "ADD_ITEM", value: name }),
    decrease: () => dispatch({ type: "DELETE_ITEM"}),
  };
};
export default connect(mapStateToProps, mapDispatchProps)(Notification);
