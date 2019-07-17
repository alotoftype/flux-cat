import React, { Component } from "react";
import keys from "./apikeys";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: []
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: `https://api.thecatapi.com/v1/images/search?limit=20&page=10&order=Desc`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "x-api-key": `${keys.cat}`
      }
    })
      .then(({ data }) => data)
      .then(cats => this.setState({ cats }));
  }
  
  render() {
    const { cats } = this.state;
    console.log(cats)
    return (
      <div className="App">
        <p>Cat application</p>
        {cats.map((cat, keys) => (
          <img src={cat.url} />
        ))}
      </div>
    );
  }
}

export default App;
