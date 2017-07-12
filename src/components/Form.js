import React, { PureComponent } from 'react';
import {func, string} from 'prop-types';

import './Form.css';

export default class Form extends PureComponent {
    static propTypes = {
        handleInputChange: func.isRequired,
        inputValue: string.isRequired
    }
    componentDidUpdate() {
      this.textInput.focus();
    }
  render() {
    return (
      <div>
          <div className="add-event-form__text-container">
            <input
              ref={(input) => { this.textInput = input; }}
              type="text"
              name="formulaString"
              onChange={this.props.handleInputChange}
              value={this.props.inputValue}
              className="form--input"
              placeholder="sum(@quantity > 1000, @revenue)"
              aria-required="true"
            />
          </div>
      </div>
    );
  }
}
