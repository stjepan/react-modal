import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {

    render = () => {
        return (
            <div className={ this.props.isOpen ? 'modal is-open' : 'modal'}>
                <div className="modal-overlay"></div>
                <div className="modal-container">
                    <div className="modal-title">
                        <span>{this.props.title}</span>
                        <i className="icon" onClick={this.props.onClose}>x</i>
                    </div>
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }

}

Modal.propTypes = {
    title: React.PropTypes.string.isRequired,
    isOpen: React.PropTypes.bool.isRequired,
    onClose: React.PropTypes.func.isRequired
};

export default Modal;