import React from 'react';
import "./App.css";
import Header from './components/Header'
import SearchResults from './components/SearchResults'

export default function App () {
  
  return (
      <div className="App">
        
        <Header/>
        
        <form >
        <input type="text"/>
        <button type="submit">Search</button>
        </form>
        
        <SearchResults/>

      </div>
  );
  
}

