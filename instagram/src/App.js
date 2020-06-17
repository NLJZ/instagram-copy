import React, { Component } from "react";
import Nav from "./components/Nav";
import Data from "./data.json";
import Posts from "./components/Posts";
console.log(Data);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Nathan",
      images: { Data },
    };
  }

  render() {
    console.log(this.state.images.Data[0].img_url);
    return (
      <React.Fragment>
        <Nav />
        <main>
          <Posts data={this.state.images.Data} />
        </main>
      </React.Fragment>
    );
  }
}
