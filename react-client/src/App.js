import React, { Component } from 'react';
import './App.css';
import Nav from './components/Home/Nav'
import {BrowserRouter ,Route ,Switch} from 'react-router-dom'
import HomeClass from './components/Home/HomeClass'
import Create from './components/Creator/Create'
import $ from 'jquery';
import Signup from './components/UserSignIn/Signup';
import Signin from './components/UserSignIn/Signin';
import SignInCreator from './components/Creator/SignInCreator';
import Slideshow from './components/Slider/Slideshow';
import Eventcreatshow from './components/Creator/Eventcreatshow';
import Eventsets from './components/Creator/Eventsets'
import Reserved from './components/Creator/Reserved';
import Footer from './components/Footer';
import location from './components/about/pages/location';
import vision from './components/about/pages/vision';
import Myprofile from './components/myprofile/myprofile';
import ContactUs from './components/ContactUs/ContactUs';


class App extends Component {

  constructor() {
    super()
    this.state = {

      items: [],
      authorized: false

    }

  }

  componentDidMount() {
    $.ajax({
      url: '/create',
      type: "GET",
      success: (data) => {
        console.log(data)
       
        this.setState({
          items: data
        })
        
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }



  render() {
    return (


      <BrowserRouter>  
      <div className="App">
     
    
      <div>
      
     
      
      <Nav />
      
     
      
      
      <Switch>
  <Route exact path='/' render={()=>{
    return (
      
      <HomeClass items={this.state.items} />
    )}}
  />
  <Route  path='/homeClass' render={()=>{
    return (
      
      <HomeClass items={this.state.items} />
    )}}
  />
<Route path='/Myprofile' component={Myprofile} />  
<Route path='/SignInCreator' component={SignInCreator} />
<Route path='/Creator' component={Create} />
<Route path='/signup' component={Signup} />
<Route path='/signin' component={Signin} />
<Route path='/location' component={location}/>
<Route path='/vision' component={vision}/>
<Route path='/Eventcreatshow' component={Eventcreatshow}/>
<Route path='/Eventsets' component={Eventsets}/>
<Route path='/Reserved' component={Reserved}/>
<Route path='/ContactUs' component={ContactUs}/>


</Switch>

</div>

</div>
      </BrowserRouter>
    
     
    );
  }
}

export default App;