import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import Country from './components/Country';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';

function App() {
  
  return (
    <>  
     <Router>
    <div> <Navbar/>
     
    
        <Routes>
      <Route path='/' element={<News  key='general' pageSize={9} category='general' />}></Route>
      <Route path='/home' element={<News key='general' pageSize={9} category='general' />}></Route>
      <Route path='/business' element={<News key='business' pageSize={9} category='business' />}></Route>
      <Route path='/entertainment' element={<News key='entertainment' pageSize={9} category='entertainment' />}></Route>
      <Route path='/general' element={<News key='general' pageSize={9} category='general' />}></Route>
      <Route path='/health' element={<News key='health' pageSize={9} category='health' />}></Route>
      <Route path='/science' element={<News key='science' pageSize={9} category='science' />}></Route>
      <Route path='/sports' element={<News key='sports' pageSize={9} category='sports' />}></Route>
      <Route path='/technology' element={<News key='technology'  pageSize={9} category='technology' />}></Route>
     
        </Routes>
      
      
 </div>
 </Router>

  <Country/>
 </>
  );
}

export default App;
