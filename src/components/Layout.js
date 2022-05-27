import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";
import "../components/layout.css";
import Web3 from "web3";

const TodoComponent = {
  width: "800px",
  margin: "30px auto",
  color: "black",
  minHeight: "200px",
  boxSizing: "border-box",
};

const Layout = () => {
  return (
    <>
      <div className="content">
        <nav>
          <ul class="ul">
            <li class="li">
              <a class="active">
                <Link to="/Home">Home</Link>
              </a>
            </li>
            <li class="li">
              <a class="active">
                <Link to="/addp">Add Products</Link>
              </a>
            </li>
            <li class="li">
              <a class="active">
                <Link to="/N">Buy Products</Link>
              </a>
            </li>
            <li class="li">
              <a class="active">
                <Link to="/N2">Your Products</Link>
              </a>
            </li>
            <li class="li">
              <a class="active">
                <Link to="/search">Search</Link>
              </a>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
