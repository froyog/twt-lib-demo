import React, { Component } from 'react';

class SearchForm extends Component {
    constructor () {
        super();
        this.state = {
            searchItem: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput (e) {
        this.setState({
            searchItem: e.target.value
        });
    }

    handleSubmit (e) {
        e.preventDefault();
        if (this.props.onSearch) {
            this.props.onSearch(this.state.searchItem);
        };
    }

    render () {
        return (
            <form>
                <input type="text" value={this.state.searchItem} onChange={this.handleInput} />
                <button type="submit" onClick={this.handleSubmit}>搜索</button>
            </form>
        )
    }
}

export default SearchForm;
