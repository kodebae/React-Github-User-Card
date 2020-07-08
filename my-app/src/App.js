import React from 'react';
import axios from 'axios';
import './App.css';




class App extends React.Component {

  state = {
    myCard: {}
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/kodebae").then(res => {
      // res.data.message
      this.setState({
        ...this.state,
        myCard: res.data.user
      });
    });
  }
}
export default App; 
