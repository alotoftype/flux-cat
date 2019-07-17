import React, { Component } from "react";
import axios from "axios";
import keys from "./apikeys";

import Wrapper from "./components/wrapper";
import ImageCard from './components/imageCard';
import OptionSelector from './components/optionSelect';

const cat_key = keys.cat
class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      breeds: []
    };
  }
  
  componentDidMount() {
    axios({
      method: "get",
      url: `https://api.thecatapi.com/v1/images/search?limit=20&page=10&order=Desc`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "x-api-key": `${cat_key}`
      }
    })
      .then(({ data }) => data)
      .then(data => data.map(el => ({ ...el, alt: "This is a Cat Image" })))
      .then(cats => this.setState({ cats }));

      axios({
          method: 'get',
          url: `https://api.thecatapi.com/v1/breeds`,
          headers: {
              'Access-Control-Allow-Origin': '*',
              'x-api-key': `${cat_key}`
          }
      })
          .then(({ data }) => data)
          .then(breeds => this.setState({breeds}))
  }
  
  render() {
    const { cats, breeds } = this.state;
    console.log(cats);
    return (
        <div className="App">
            <p>Cat application</p>
            <Wrapper>
                <section>
                    <h1>Select Your Breed</h1>
                    <OptionSelector animals={breeds}/>
                </section>
                <section>
                    {cats.map((cat, keys) => (
                        <ImageCard key={cat.id} animal={cat} />
                    ))}
                </section>
            </Wrapper>
        </div>
    )
  }
}

export default App;
