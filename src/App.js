import React, { Component } from 'react';
import './App.css';
import Body from './Body';
import Footer from './Header/Footer';
import Header_mid from './Header/Header_mid';
import Nav1 from './Header/Nav1';
import Navbar from './Header/Navbar';
import CustomizedMenus from './Component/test';

class App extends Component {
  componentDidMount(){
    window.onscroll = function() {myFunction()};

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("main_head");
    } else {
      header.classList.remove("main_head");
    }
}
  };
  render(){
    
  return (
    <div className="App">
    {/* three navigations  */}
      <Nav1 />
      <div className="myHeader" id="myHeader">
      
        <Header_mid/>
        <Navbar/>
      </div>
      {/* Body Part */}
      <Body/>
     
      <Footer/>
    </div>
  );
}}


export default App;
