import Style from "./App.css";
import React, { Component } from "react";
import Web3 from "web3";
import mark from "../abis/market.json";
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
  margin: "30px auto",
};
const m = {
  textAlign: "center",
  margin: "10px auto",
};
const bg = {
  background: "black",

  /* Set up proportionate scaling */

  top: 0,
  left: 0,
  color: "black",
};

class Main extends Component {
  async componentWillMount() {
    await this.loadweb3();
    await this.loadBlockchainData();
  }
  async loadweb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const networkData = mark.networks[networkId];
    this.setState({ account: accounts[0] });
  }
  constructor(props) {
    super(props);
    this.state = {
      account: "",
    };
  }
  render() {
    return (
      <div className="content1">
        <div className="container">
          <div>
            <div style={Header}>
              <h2>Your Products</h2>
              <table className="table" style={Header}>
                <thead>
                  <tr>
                    <th scope="col"># Product Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Owner</th>
                  </tr>
                </thead>
                <tbody id="productList">
                  {this.props.products.map((product, key) => {
                    if (product.owner === this.state.account) {
                      return (
                        <tr key={key}>
                          <th scope="row">{product.id.toString()}</th>
                          <td>{product.name}</td>
                          <td>
                            {window.web3.utils.fromWei(
                              product.price.toString(),
                              "Ether"
                            )}{" "}
                            Eth
                          </td>
                          <td>{product.owner}</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
