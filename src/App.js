import React, { PureComponent } from 'react';
import './App.css';
import Form from './components/Form';
import SuggestionList from './components/SuggestionList';
import dompurify from 'dompurify';
import {defaultState, getContext, findMatch, countSpaces, dateToday} from './utils';

class App extends PureComponent {
  state = defaultState;

  getChoices = (context = '', formulaString = '') => {
    if (!formulaString.includes('(') || formulaString.includes(')')) {
      if (context === '' || !context || formulaString.includes(')')) {
        return [];
      }
    }

    if (!formulaString.includes('(') && findMatch(formulaString, this.state.supportedFunctions).length > 0) {
      return findMatch(context, this.state.supportedFunctions)
    }

    if (formulaString.includes('(') && !formulaString.includes(' ')) {
      return this.state.fields;
    }

    if (formulaString.includes('(') && formulaString.includes('@') && countSpaces(formulaString) === 1) {
      return this.state.comparators;
    }

    if (countSpaces(formulaString) > 1 && countSpaces(formulaString) < 3 && formulaString.includes('@created_at')) {
      return this.state.date;
    } else if (countSpaces(formulaString) > 1 && countSpaces(formulaString) < 3) {
      return this.state.number;
    }

    if (countSpaces(formulaString) === 3 && formulaString.includes(',')) {
      return this.state.fields;
    }

    return this.state.help;
  }

  generateTypeAhead = (formula, pos) => {
    return this.getChoices(getContext(formula, pos), this.state.formulaString);
  }

  handleInputChange = (e) => {
    e.preventDefault();
    const sanitizedInput = dompurify.sanitize(e.target.value);
    this.setState({ [e.target.name]: sanitizedInput });
  }

  handleTypeAheadClick = (typeAheadVal) => {
    let contextLength = getContext(this.state.formulaString, this.state.formulaString.length).length;
    let modifiedFormulaString = this.state.formulaString.slice(0, this.state.formulaString.length - contextLength)
    this.setState({ formulaString: modifiedFormulaString + typeAheadVal });
  }




  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="title">Typeahead</h2>
        </div>
        <div className="typeahead-container">
          <Form handleInputChange={this.handleInputChange} inputValue={this.state.formulaString} />
          <SuggestionList
            typeAheadData={this.generateTypeAhead(this.state.formulaString, this.state.formulaString.length)} handleTypeAheadClick={this.handleTypeAheadClick}
            punctuation={this.state.punctuation}
          />
        </div>
      </div>
    );
  }
}

export default App;
