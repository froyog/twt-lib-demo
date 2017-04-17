import React, { Component } from 'react';
import './loading.css';

class Loading extends Component {
    handleCancel () {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    }

    render () {
        return (
            <div>
                <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                        <div className="pswp__preloader__donut"></div>
                    </div>
                </div>
                <a href="#" className="cancel" onClick={this.handleCancel.bind(this)}>跳过加载</a>
            </div>
        )
    }
}


export default Loading;
