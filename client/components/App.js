import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.state);
    return (
      <div className='container'>
        <h1>Tic Tac Toe</h1>
      </div>
    );
  }
}

export default App;