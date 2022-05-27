import React, { Component } from "react";
const TodoComponent = {
  width: "800px",
  margin: "30px auto",
  color: "black",
  minHeight: "200px",
  boxSizing: "border-box",
};
const Home = () => {
  return (
    <div className="container">
      <h1>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; WELCOME TO METAMARKET </h1>
      <br></br>
      <br></br>
      <h5>
        You can:- <br></br>
        <br></br>
        <ul>
          <li>Sell your products </li>
          <br></br>
          <li>Buy other products</li>
        </ul>
      </h5>
      <br></br>
    </div>
  );
};
export default Home;
