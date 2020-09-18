import React from 'react';

import InputBox from './components/inputBox'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      cardNo: undefined
    }
  }
  getCreditCardNum=(value)=>{
    this.setState({
      cardNo:value
    })
  }
  
  render(){
    const {cardNo}= this.state;
    return (
      <div className="App">
        <h1>Credit Card Number</h1>
        <div className='boxContainer'>
          <InputBox inputBoxCount={4} getCreditCardNum={this.getCreditCardNum}/>
        </div>
        <h2>{cardNo}</h2>
      </div>
    );
  }
}

export default App;
