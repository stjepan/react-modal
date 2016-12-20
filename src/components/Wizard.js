import React, { Component } from 'react';
import './Wizard.css';

export class Step extends Component {

    prev = () => {
        if (this.props.wizard.reset) {
            this.props.wizard.reset();
        }
        this.props.onPrev();
    }

    next = () => {
        if (this.props.wizard.next) {
            this.props.wizard.next();
        }
        this.props.onNext();
    }

    render = () => {
        return (
            <div className={this.props.className}>
                {this.props.children}
                <div className="step-actions">
                    <button onClick={this.prev}>{this.props.prevText}</button>
                    <button onClick={this.next}>{this.props.nextText}</button>
                </div>
            </div>
        )
    }

}

Step.defaultProps = {
    className: '',
    prevText: "Cancel",
    nextText: "Proceed"
};

Step.propTypes = {
    className: React.PropTypes.string,
    onPrev: React.PropTypes.func.isRequired,
    onNext: React.PropTypes.func.isRequired,
    prevText: React.PropTypes.string.isRequired,
    nextText: React.PropTypes.string.isRequired
};

export class Wizard extends Component {

    constructor(props) {

        super(props);

        this.state = {
            currentStep: 0
        };

    }

    reset = () => {
        console.log('wizard reset');
        this.setState({
            currentStep: 0
        });
    }

    next = () => {
        console.log('wizard next');
        this.setState({
            currentStep: this.state.currentStep + 1
        });
    }

    render = () => {

        let steps = React.Children
            .map(this.props.children, child => child.type === Step ? child : null)
            .map((step, index, steps) => {

                let classes = ['step', `step-${index + 1}`];
                const propClassName = step.props.className;

                if (propClassName.length) {
                    classes.push(propClassName);
                }

                if (index === this.state.currentStep) {
                    classes.push('active');

                    let wizard = {
                        reset: this.reset
                    }

                    wizard.next = index < steps.length - 1
                        ? this.next
                        : this.reset;

                    return React.cloneElement(step, {
                        className: classes.join(' '),
                        wizard: wizard
                    })
                }

                return React.cloneElement(step, { className: classes.join(' ') })

            });

        return (
            <div className="wizard">
                {steps}
            </div>
        );

    }

}

Wizard.defaultProps = {
    steps: []
}

Wizard.propTypes = {

    children: function (props, propName, componentName) {

        const prop = props[propName];
        let error = null;

        React.Children.forEach(prop, function (child) {
            if (child.type !== Step) {
                error = new Error(`${componentName}'s children should be of type 'Step'.`);
            }
        });

        return error;

    }

};
