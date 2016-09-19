import React from 'react';

export default class SearchBar extends React.Component {
	handleChange() {
		// passing filter data up by using a callback
        this.props.onUserInput(
        	// ref is like the id
            this.refs.filterTextInput.value
        );
    }
	render(){
		return (
            <form>
                <input 
                	type="text" 
                	placeholder="Search for one keyword..." 
                	ref="filterTextInput"
                	value= {this.props.filterText}
                	onChange= {this.handleChange.bind(this)} 
                />
            </form>
        );
	}
}