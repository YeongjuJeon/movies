import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading: false})
    },5000)
  }
  render() {
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? 'Loading...' : 'We are ready'}
      </div>
    );
  }
}

export default App;