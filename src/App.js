import React, { Component } from 'react';
import logo from './logo.svg';
import { Menu, Icon } from 'antd';
import './App.css'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
      </div>
        <div>
        <img class="image is loaded" src="//images.contentful.com/3cttzl4i3k1h/4os6mdHSNywUGQ4suqu8ko/10d81b0d0a6cc3e963cedc60215c6155/IMG_4335-267.jpg?w=731&h=881&q=80&fm=&fl=progressive&fit=fill" height="800" width="700"/>
        <a class="header-logo-link" data-automation="header-logo" href="/" data-reactid="9">WillowTree, Inc.</a>
        </div>

         <div className="content">
            <div className="heroheader">
            <h1> What we do </h1>
            </div>
            <p> We build apps, responsive sites, bots—any digital product that lives on a screen—for the world’s leading companies.</p>
            <p>Our elite teams challenge themselves to build extraordinary experiences by bridging the latest strategy
               and design thinking with enterprise-grade software development </p>.
            </div>

          <div class="second">

            </div>
        </div>

       
        
    );
  }
}

export default App;
