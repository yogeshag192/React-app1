import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import arrow from './arrow.png';
import Person from './Person/Person'

class App extends Component {

    state = {
      PersonsArray : [
        {name: "Max", age: "28"},
        {name: "Stephan", age: "29"},
        {name: "Ankit", age: "34"},
        {name: "Yogesh", age: "28"}

      ],
      Surname: "Chauhan",
      showPersonsFlag: false

    };

    switchNameHandler = (newName) => {
      console.log("was clicked!");
      this.setState( {
        PersonsArray : [
          {name: newName, age: "28"},
          {name: "Stephaniee", age: "29999999"},
          {name: "Ankit", age: "34"},
          {name: "Yogesh", age: "28"}
  
        ]
      }
      )
    }

    changeEventHandler = (event) => {
        this.setState( {
          PersonsArray : [
            {name: "Max", age: "28"},
            {name: event.target.value, age: "29"},
            {name: "Ankit", age: "34"},
            {name: "Yogesh", age: "28"}
          ]
        }

        )
    }

    toggleEventHandler = () => {

      const doesShow = this.state.showPersonsFlag;
      this.setState({showPersonsFlag: !doesShow}); 

    }


  render() {

      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '2px solid blue',
        padding: '8px',
        cursor: 'pointer'

      };  

      let PersonsVariable = null;
      if (this.state.showPersonsFlag) {
       
        PersonsVariable = (
            <div>
                <Person 
                name ={this.state.PersonsArray[0].name} 
                age ={this.state.PersonsArray[0].age} 
                click={this.switchNameHandler.bind(this, 'BindedNameofPerson')} 
                ></Person> 

                <Person 
                name ={this.state.PersonsArray[1].name} 
                age ={this.state.PersonsArray[1].age}
                changed = {this.changeEventHandler} 
                >Text of this line!!</Person>

                <Person 
                name ={this.state.PersonsArray[2].name} 
                age ={this.state.PersonsArray[2].age} 
                >{this.state.Surname}</Person>

                <Person 
                name ={this.state.PersonsArray[3].name} 
                age ={this.state.PersonsArray[3].age} ></Person>
            </div>
          );
      }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo } className="App-logo" alt="logo" />
          <img src={arrow} className="App2" alt="arrow" />
          <h1 className="App-title">Welcome to React</h1>
          <h1 className="App-title1">Welcome to React 2</h1>
          <p>This seems to be working..</p>
          
          <button
          style={style}
          onClick={() => this.switchNameHandler('ButtonClickedNameofPerson')}>Switch Person</button>
          {/*  Note: bind syntax is recommended rather than using anonymous function.
 */}
          <button
            style={style}
            onClick={this.toggleEventHandler}>Show/Hide Persons</button>
            
          {PersonsVariable}     
       

        </header>
      </div>
      
       
      
    );
  
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

}
}

export default App;
