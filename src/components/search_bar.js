import React, {Component} from 'react';
// const Component = React.Component;

// const SearchBar = () => {
// 	return <input />
// }

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	render(){
		return (
			<div className="search-bar">
				<input 
				value={this.setState.term}
				onChange={e => this.onInputChange(e.target.value)} />
			</div>
		);
	}
}

export default SearchBar;