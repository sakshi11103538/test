import React, { useState, useEffect, useContext } from 'react';
import { MovieContext } from '../../App';
import axios from 'axios';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const {list, resetList, fetchMovies} = useContext(MovieContext)

    useEffect(() => {
        if (searchTerm.trim() === '') {
        setSuggestions([]);
        } else {
        fetchSuggestions(searchTerm);
        }
    }, [searchTerm]);

  const fetchSuggestions = (searchTerm) => {

    
    
  };

  const handleOnSearch = (string) => {
    // Triggered when the user types in the search input
    let newList = list.filter( movie => {
        return (movie.title.toLowerCase().includes(string.toLowerCase()) || movie.creationAt.includes(string))
    
   })

   newList.length >0 && resetList(newList)
    setSearchTerm(string);
  };

  const handleOnSelect = (item) => {
    // Triggered when the user selects an item from the suggestions list
    handleOnSearch()
    console.log('Selected:', item);
  };

  const handleOnHover = (item) => {
    // Triggered when the user hovers over an item in the suggestions list

    console.log('Hovered:', item);
  };

  const handleOnFocus = () => {
    console.log('The search input is focused');
  };

  const handleOnClear = () => {
    fetchMovies();
    setSuggestions([]);
  };

  return (
    <div style={{ width: 300 }}>
      <ReactSearchAutocomplete
        items={suggestions}
        onSearch={handleOnSearch}
        onSelect={handleOnSelect}
        onHover={handleOnHover}
        onFocus={handleOnFocus}
        onClear={handleOnClear}
        placeholder="Type to search"
      />
    </div>
  );
}

export default SearchBar;
