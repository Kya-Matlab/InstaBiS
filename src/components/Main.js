import Style from "./App.css";
import React, { Component } from "react";
const TodoComponent = {
  width: "300px",
  margin: "30px auto",
  color: "black",
  minHeight: "200px",
  boxSizing: "border-box",
};
const Header = {
  padding: "10px 10px",
  textAlign: "left",
  color: "white",
  fontSize: "16px",
};
const n = {
  textAlign: "center",
  width: "300px",
  margin: "0px auto",
};
const m = {
  textAlign: "center",
  width: "125px",
  margin: "10px auto",
};
const bg = {
  background: "white",

  /* Set up proportionate scaling */

  top: 0,
  left: 0,
  color: "black",
};
class Main extends Component {
  render() {
    return (
      <div className="content">
        <div className="container">
          <div>
            <br></br>
            <h1 style={n}> Add Product </h1>
            <br></br>
            <br></br>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const name = this.productName.value;
                const Web3Utils = require("web3-utils");
                const price = Web3Utils.toWei(
                  this.productPrice.value.toString(),
                  "Ether"
                );
                this.props.createproduct(name, price);
              }}
            >
              <div style={n}>
                <input
                  id="productName"
                  type="text"
                  ref={(input) => {
                    this.productName = input;
                  }}
                  className="form-control"
                  placeholder="Product Name"
                  required
                />
              </div>
              <br></br>
              <div style={n}>
                <input
                  id="productPrice"
                  type="text"
                  ref={(input) => {
                    this.productPrice = input;
                  }}
                  className="form-control"
                  placeholder="Product Price"
                  required
                />
              </div>

              <div style={m}>
                <button style={m} type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
