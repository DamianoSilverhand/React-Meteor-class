import {Meteor} from 'meteor/meteor';
import React, { Component } from 'react';
import './App.css';
import route from '/imports/routing/router.js';
import {withTracker} from 'meteor/react-meteor-data';
import Posts from '/imports/api/blog/collections.js';




class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      desc: "Default Value",
      title: "Default Title"
    }
  }
  

    goToContacts = () => {
        route.go('/contact') // pathDef, params, queryParams

    }
    goToAbout = () => {
        route.go('/about') // pathDef, params, queryParams

    }

    getAllPosts=()=>{
      mPosts=  this.props.hkPosts;
      return mPosts.map((post)=>(
        <div key = {post._id}>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
        </div>
      ))
    }

    handleTitleChange = (e)=>{
      this.setState({
        title: e.target.value
        
      })
    }
    handleDescChange = (e)=>{
      this.setState({
        desc: e.target.value
        
      })
    }
    handleSubmit = (e)=>{
      const post = {
        title:this.state.title,
        desc: this.state.desc
      }
      Meteor.call('posts.create',post);
      e.preventDefault();
    }

  render() {
    
    return (
      <div className="App">
        <h1>Our homepage</h1>
        <button onClick = {this.goToContacts}>Contact Us</button>
        <button onClick = {this.goToAbout}>About Us</button>
        {this.getAllPosts()}
        <br/>
        <form onSubmit = {this.handleSubmit}>
        <label htmlFor="">Blog Post</label>
        <br/>
        <label htmlFor="">Title</label>
        <input type="text" value={this.state.title} id="" onChange = {this.handleTitleChange}/>
        <br/>
        <label htmlFor="">Description</label>
        
        <textarea name="" id="" cols="30" rows="10" value={this.state.desc} onChange = {this.handleDescChange}></textarea>
        <br/>
        <button type="submit">Submit</button>
        </form>        
      </div>
    );
  }
  
}
export default withTracker(() =>{
  
  return{
    hkPosts : Posts.find().fetch(),

  }

})(Home);


