import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedResearch: false,
      research: [],
    };
  }

  componentDidMount() {
    fetch('/research/')
      .then(res => res.json())
      .then((research) => {

        // TODO: I'm not sure this condition is needed. Must check what's returned from Postgres if no results found.
        if (!Array.isArray(research)) research = [];
        return this.setState({
          research,
          fetchedResearch: true
        });
      })
      .catch(err => console.log('Research.componentDidMount: get research: ERROR: ', err));
  }

  render() {
    // FIXME: see if we can make this a spinner rather than this text
    if (!this.state.fetchedResearch) return (
      <div>
        <h1>Loading data, please wait...</h1>
      </div>
    );

    const { research } = this.state;
    console.log(research);
    
    if (!research.length) return (
      <div>No studies found</div>
    );

    return (
      <div className='container'>
        <h1>{research[0].name}</h1>
        <p>{research[0].description}</p>
        <p>{research[0].long_description}</p>
      </div>
    );
  }
}

export default App;