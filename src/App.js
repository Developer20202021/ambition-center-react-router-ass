
import { BrowserRouter , Switch , Route} from 'react-router-dom';
import './App.css';
import React, { createContext, useEffect, useState } from "react";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SingleService from './components/serviceDetail/SingleService';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';


export const DataContext =createContext([]);

function App() {

  const [data, setData]=useState([]);

  useEffect(()=>{
    fetch('./courses.json')
    .then(res => res.json())
    .then(data =>setData(data))
  },[])




  return (
   <DataContext.Provider value={data}>

 <div className="App">
    <BrowserRouter>
    <Header></Header>
    <Switch>
    <Route exact  path='/'>
      <Home></Home>
    </Route>
    <Route exact  path='/home'>
      <Home></Home>
    </Route>
    <Route path='/contact'>
      <Contact></Contact>
    </Route>

    <Route path='/about'>
      <About></About>
    </Route>

    <Route exact path='/services'>
      <Services></Services>
    </Route>

    <Route path='/services/:id'>
      <SingleService ></SingleService>
    </Route>
      <Route path='*'>
      <NotFound></NotFound>
      </Route>

    </Switch>
    <Footer></Footer>
    </BrowserRouter>
    </div>



   </DataContext.Provider>
  );
}

export default App;
