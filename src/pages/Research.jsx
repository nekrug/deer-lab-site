import React, {Component} from 'react';

// function Research() {
//   return (
//     <h1>Studies and Projects... presumably we`&apos`ll import components and the db logic in here somehow </h1>
//   );
// }

// TODO: Refactor this into a functional layout component with the business logic in actual components
class Research extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedResearch: false,
      research: [],
    };
  }

  componentDidMount() {
    fetch('/research/api')
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

export default Research;