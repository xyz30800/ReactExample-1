import React, {Component} from 'react';

const SearchBar = (props) => {

	return (
		<div className="search-bar">
			<input 
			onChange={e => props.onSearchTermChange(e.target.value)} />
		</div>
	);
}

export default SearchBar;