import './SearchBar.css'
import { useState } from 'react';

function SearchBar() {
    let [search,setSearch] = useState('');

    function handleChange(e){
        setSearch(e.target.value);
    }

    function searchNow(){
        console.log(search)
      }
  return (
    <div className="search-bar">        
        <input 
            type='text'
            id='search' 
            value={search} 
            onChange={(e)=>{handleChange(e)}} 
            placeholder='search for something'
            onKeyDown={(e) => {
              if (e.key === "Enter")
                searchNow();
              }}
        />
        <div onClick={searchNow} className='getStarted'>get started!</div>
    </div>
  )
}

export default SearchBar