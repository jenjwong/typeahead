import React from 'react';
import SuggestionListItem from './SuggestionListItem';

const SuggestionList = ({ typeAheadData = [], handleTypeAheadClick }) => (
  <div>
    {typeAheadData.map(itemData =>
      <SuggestionListItem
        key={itemData.id}
        itemData={itemData}
        handleTypeAheadClick={handleTypeAheadClick.bind(null, itemData.name + itemData.endPunctuation)}
      />,
    )}
  </div>
  );

SuggestionList.propTypes = {
  typeAheadData: React.PropTypes.array.isRequired,
  handleTypeAheadClick: React.PropTypes.func.isRequired,
};

export default SuggestionList;
