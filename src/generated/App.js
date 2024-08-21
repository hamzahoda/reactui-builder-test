import React from 'react'; 
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
 import Home  from './Home.js'; 
 
 import About  from './About.js'; 
 const App = () => { return <div className="app dark-mode slategrey"> 
 <Router> 
 <Routes>
 <Route exact path="/" element={<Home/>}/>; 
 
 <Route exact path="/about" element={<About/>}/>; 
 
 </Routes> 
 </Router> 
 </div> } 
 export default App 