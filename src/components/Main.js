// import Style from "./App.css";
import React, { Component } from "react";
import "../components/Main.css";
import logo from "../Images/image1.png";
class Main extends Component {
  render() {
    return (
      <div className="addp-content">
        <div className="addp-container">
          <div>
            <h1 className="page-head"> Add Product </h1>
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
              <div className="prod-name-div">
                <label>Product Name</label>
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
              <div className="prod-price-div">
                <label>Product Price</label>
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

              <div className="product-desc">
                <label>About the Product</label>
                <textarea type="text" className="form-control" placeholder="Explain about the product" required/>
              </div>

              <div className="product-desc">
                <label>Upload Product Image</label>
                <input type="file" className="form-control" placeholder="Explain about the product" required/>
              </div>

              <div>
                <button type="submit" className="form-button">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="vector-image">
            <img src= {logo} alt = "price-img" />
        </div>
      </div>
    );
  }
}

export default Main;
