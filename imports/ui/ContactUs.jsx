import {Meteor} from 'meteor/meteor';
import React, { Component } from 'react';
import './App.css';
import route from '/imports/routing/router.js';



export default class ContactUs extends Component {
    goToHome = () => {
        route.go('/') // pathDef, params, queryParams
    
    }
  render() {
    
    return (
      <div className="App">
        <h1>Our Contact Us page</h1>
        <button onClick = {this.goToHome}>Back Home</button>
      </div>
    );
  }
  
}


