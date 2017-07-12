import React from 'react';
import propTypes from 'prop-types';
import './SuggestionListItem.css';

const SuggestionListItem = ({ itemData = {}, handleTypeAheadClick }) => (
  <div className="suggestion-list">
    <div onClick={handleTypeAheadClick} className={'name'}>{itemData.name}</div>
    <div className={'description'}>
      {itemData.description && <span className="description-title"> Description: </span>}
      {itemData.description}
    </div>
    <div className={'help'}>
      <div>{itemData.help} <a href={itemData.url}>{itemData.helpLink}</a></div>
    </div>
  </div>
  );

SuggestionListItem.propTypes = {
  itemData: React.PropTypes.object.isRequired,
  handleTypeAheadClick: React.PropTypes.func.isRequired,
};

export default SuggestionListItem;
