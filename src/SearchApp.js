import React, { Component } from 'react';
import SearchForm from './SearchForm';
import SearchList from './SearchList';
import Loading from './Loading';
import LoadButton from './LoadButton';

class SearchApp extends Component {
    constructor () {
        super();
        this.state = {
            books: [],
            isShowLoading: false,
            searchFailed: false,
            netFailed: false
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.search = this.search.bind(this);
    }

    handleSearch (searchItem) {
        this.setState({
            isShowLoading: true
        });
        this.searchItem = searchItem;
        this.timeout = setTimeout(() => {
            this.search(this.searchItem);
        }, 10000);
    }

    handleCancel () {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.search(this.searchItem);
        }
    }

    search (title) {
        const libApi = 'http://open.twtstudio.com/api/v1/library/book?';
        fetch(libApi + 'title=' + title)
            .then(response => response.json())
            .then(rawData => {
                if (rawData.errorCode === -1) {
                    this.errorMessage = rawData.message
                    this.setState({
                        searchFailed: true
                    });
                } else {
                    const data = rawData.data;
                    this.setState({
                        books: data,
                        isShowLoading: false
                    });
                }
            })
            .catch(e => {
                this.setState({
                    netFailed: true
                });
                console.log(e);
            });
    }

    render () {
        return (
            <div>
                <SearchForm onSearch={this.handleSearch} />
                {this.state.isShowLoading ? <Loading onCancel={this.handleCancel}/> : null}
                <SearchList data={this.state.books} />
            </div>
        )
    }
}

export default SearchApp;
