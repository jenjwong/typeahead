export const getContext = (formula = '', pos = 0) => {
  let startOfContext = pos - 1;
  if (startOfContext < 0) {
    startOfContext = 1;
  }
  while (startOfContext > 0) {
    const char = formula[startOfContext];
    if (char === ' ' || char === '(' || char === ')' || char === ',') {
      startOfContext++;
      break;
    }
    startOfContext--;
  }
  const endOfContext = pos;
  return formula.substring(startOfContext, endOfContext);
};


/**
 * Given a string returns an array of matches
 * @param {stringToMatch} String
 * @param {optionsToMatch} Array
 * @returns {array}
 */
export const findMatch = (stringToMatch, optionsToMatch) => optionsToMatch.filter((option) => {
  const regex = new RegExp(`^${stringToMatch}`, 'gi');
  return option.name.match(regex);
});


/**
 * Given a string returns number of spaces
 * @param {str} String
 * @returns {integer}
 */

export const countSpaces = (str) => {
  const count = (str.match(/ /g) || []).length;
  return count;
};


/**
 * Takes no parameters and returns today's date
 * @returns {array}
 */

export const dateToday = () => {
  const date = new Date();
  const [day, month, year] = date.toLocaleDateString().split('/');
  const formatedDate = `${year}-${month}-${day}`;
  return [formatedDate];
};

/**
 * Initializes default state with look-up information
 * @returns {object}
 */

export const defaultState = {
  fields:
  [
    { id: 1, name: '@revenue', description: 'select field', endPunctuation: '' },
    { id: 2, name: '@quantity', description: 'select field', endPunctuation: '' },
    { id: 3, name: '@created_at', description: 'select field', endPunctuation: '' },
  ],
  comparators:
  [
    { id: 1, name: '>', description: 'Greater than...', endPunctuation: ' ' },
    { id: 2, name: '<', description: 'Less than...', endPunctuation: ' ' },
    { id: 3, name: '>=', description: 'Greater or equal...', endPunctuation: ' ' },
    { id: 4, name: '<=', description: 'Less or equal...', endPunctuation: ' ' },
    { id: 5, name: '==', description: 'Equal...', endPunctuation: ' ' },
    { id: 6, name: 'NOT', description: 'Not...', endPunctuation: ' ' },
  ],
  supportedFunctions: [
    { id: 1, name: 'sum', description: 'Sum of a series of numbers...', example: '1', endPunctuation: '(' },
    { id: 2, name: 'min', description: 'Minium value in a numberic data-set...', example: 'eg 2', endPunctuation: '(' },
    { id: 3, name: 'avg', description: 'Rank of a specified value in a dataset...', example: 'eg3', endPunctuation: '(' },
    { id: 4, name: 'max', description: 'Maximum value in a dataset...', example: 'eg4', endPunctuation: '(' }],
  formulaString: '',
  date: [{ id: 1, name: dateToday(), description: 'click above to enter today\'s date', endPunctuation: ', ' }],
  number: [{ id: 1, name: '', description: 'numeric integer' },
  ],
  help:
  [
    { id: 1, help: 'It looks like you\'re having trouble.', helpLink: 'Click here for documentation!', url: '' },

  ],
};
