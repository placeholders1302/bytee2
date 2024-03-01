import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
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
            placeholder='search'
            onKeyDown={(e) => {
              if (e.key === "Enter")
                searchNow();
              }}
        />
        <SearchIcon onClick={searchNow} sx={{margin:`0 10px 0 -16px`, border:'2px solid black',borderRadius:'50%', height:'32px', width:'32px',padding:'2px'}}/>
    </div>
  )
}

export default SearchBar