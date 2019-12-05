import React, {Component} from 'react';

import InputValue from './InputValue';
//import ButtonsTable from './ButtonsTable';
import './App.css';

class App extends Component {

  state = {
    value: '',
  }

  handleInput = (e) => {
    const number = e.target.validity.valid ? e.target.value : this.state.value;
    this.setState({
        value: number,
    })
}

  render() {

    const pattern = '[0-9]*';

    return (
      <div className="App">
        <InputValue 
          changeInput={this.handleInput}
          valueInput={this.state.value}
          patternInput={pattern}
        />
      </div>
    );
  }
}

export default App;
