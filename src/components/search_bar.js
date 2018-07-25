import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    render() {
        return (
            <input value={ this.state.term } placeholder="Search" type="text" onChange={ e => this.setState({ term: e.target.value }) }/>
        );
    }
}

export default SearchBar;