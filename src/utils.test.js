import {
    getContext,
    findMatch,
    countSpaces,
} from './utils';

describe('getContext should take string and position and return context', () => {
  const str = 'sum(@';
  const pos = 5;

  it('should return @ for sum(@', () => {
    expect(getContext(str, pos)).toEqual('@');
  });
});

describe('countSpaces should take string and return the number of spaces', () => {
  const str = 'sum(@';
  const pos = 5;

  it('should return @ for sum(@', () => {
    expect(countSpaces('I have three spaces')).toEqual(3);
  });
});

describe('findMatch should take string and returns an array of matches', () => {
  const stringToMatch = 'su';
  const optionsToMatch = [{ name: 'sum' }];

  it('should return @ for sum(@', () => {
    expect(findMatch(stringToMatch, optionsToMatch)[0].name).toEqual('sum');
  });
});
