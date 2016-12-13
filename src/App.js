import React, { Component } from 'react';
import Modal from './components/Modal';
import ContentX from './components/ContentX';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModuleOpen: false
    };

  }

  onModuleClose = () => {
    this.setState({
      isModuleOpen: false
    });
  }

  openModule = () => {
    this.setState({
      isModuleOpen: true
    });
  }

  render = () => {
    return (
      <div>
        <p>Lorem ipsum dolores ...</p>
        <button onClick={this.openModule}>Show modal</button>
        <Modal title="Lorem ipsum" isOpen={this.state.isModuleOpen} onClose={this.onModuleClose}>
          <ContentX />
        </Modal>
      </div>
    );
  }
}

export default App;
