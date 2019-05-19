import React from 'react';

class App extends React.Component {
  state = {
    currentCount: 0
  }

  onAddition = () => this.setState({ currentCount: this.state.currentCount + 1 })
  onSubstraction = () => this.setState({ currentCount: this.state.currentCount - 1 })

  render() {
    return (
      <div className="App">
        <h1>Virtual DOM</h1>
        <h2>{this.state.currentCount}</h2> 
        <button onClick={() => this.onSubstraction()}>-</button>
        <button onClick={() => this.onAddition()}>+</button>
      </div>
    );
  }
}

export default App;
