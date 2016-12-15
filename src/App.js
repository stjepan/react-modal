import React, { Component } from 'react';
import Modal from './components/Modal';
import { Wizard, Step } from './components/Wizard';
import ContentX from './components/ContentX';
import ContentY from './components/ContentY';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModuleXOpen: false,
      isModuleYOpen: false
    };

  }

  onModuleClose = () => {
    this.setState({
      isModuleXOpen: false,
      isModuleYOpen: false
    });
  }

  openModuleX = () => {
    this.setState({
      isModuleXOpen: true
    });
  }

  openModuleY = () => {
    this.setState({
      isModuleYOpen: true
    });
  }

  closeAccount = () => {
    console.log('close account');
  }

  submitCloseAccount = () => {
    console.log('submit closing account');
    this.onModuleClose();
  }

  makeTransaction = () => {
    console.log('make transaction');
  }

  submitMakeTransaction = () => {
    console.log('submit make transaction');
    this.onModuleClose();
  }

  render = () => {
    return (
      <div>
        <p>Lorem ipsum dolores ...</p>
        <button onClick={this.openModuleX}>Avsluta konto</button>
        <button onClick={this.openModuleY}>Gör uttag</button>
        <Modal title="Avsluta konto" isOpen={this.state.isModuleXOpen} onClose={this.onModuleClose}>
          <Wizard>
            <Step onPrev={this.onModuleClose} prevText="Avbryt" onNext={this.closeAccount} nextText="Gå vidare" className="close-account">
              <ContentX />
            </Step>
            <Step onPrev={this.onModuleClose} prevText="Avbryt" onNext={this.submitCloseAccount} nextText="Bekräfta avslut" className="submit-close-account">
              <ContentY />
            </Step>
          </Wizard>
        </Modal>
        <Modal title="Begär uttag från sparkonto" isOpen={this.state.isModuleYOpen} onClose={this.onModuleClose}>
          <Wizard>
            <Step onPrev={this.onModuleClose} prevText="Avbryt" onNext={this.makeTransaction} nextText="Gå vidare">
              <ContentX />
            </Step>
            <Step onPrev={this.onModuleClose} prevText="Avbryt" onNext={this.submitMakeTransaction} nextText="Genomför uttag">
              <ContentY />
            </Step>
          </Wizard>
        </Modal>
      </div>
    );
  }
}

export default App;
