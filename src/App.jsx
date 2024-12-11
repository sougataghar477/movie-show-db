import { useState } from 'react'
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';
 import { BrowserRouter as Router,Routes,Route } from 'react-router';
 
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
function App() {
    return <Router>
      <Navbar/>
      <SearchInput/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<SearchResults/>}/>
        
      </Routes>
    </Router>
  
}

export default App
