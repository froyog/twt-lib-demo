import React, { Component } from 'react';

class LoadButton extends Component {
    constructor () {
        super();
        this.handleLoadNext = this.handleLoadNext.bind(this);
    }

    handleLoadNext () {
        if (this.props.onLoadNext) {
            this.props.onLoadNext();
        }
    }

    render () {
        return (
            <button className="load-button" onClick={this.handleLoadNext}>加载下一页</button>
        )
    }
}

export default LoadButton;
