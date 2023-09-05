import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { searchMovies } from './api';

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #0074d9;
  border-radius: 4px;
  margin-right: 10px;
  font-family: 'Arial', sans-serif;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
`;

const AutocompleteList = styled.ul`
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-top: none;
  width: 300px;
  left: 0;
`;

const AutocompleteItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  useEffect(() => {
    let timer;
    if (searchQuery) {
      timer = setTimeout(handleSearch, 300);
    } else {
      setSearchResults([]);
      setShowAutocomplete(false);
    }

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearch = async () => {
    const results = await searchMovies(searchQuery);
    setSearchResults(results);
    setShowAutocomplete(true);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
  };

  return (
    <SearchBarContainer>
      <Input
        type="text"
        placeholder="Пошук фільмів"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <SearchButton onClick={handleSearch}>Пошук</SearchButton>

      {showAutocomplete && (
        <AutocompleteList>
          {searchResults.map((result) => (
            <AutocompleteItem key={result.id}>{result.title}</AutocompleteItem>
          ))}
        </AutocompleteList>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
