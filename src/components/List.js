import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LiItem from './LiItem';
import LiHeader from './LiHeader';
import BlankList from './BlankList';

class List extends Component {
  determineItemListKeys = items => Object.keys(items)

  determineLiItemsSum = items => (
    this.determineItemListKeys(items).reduce((accumulator, itemId) => (
      accumulator + parseInt(items[itemId].quantity, 10)
    ), 0)
  )

  createLiItemElements(items) {
    let item;
    const { clearLiItem } = this.props;

    return (
      this
      .determineItemListKeys(items)
      .map(itemId => {
        item = items[itemId];
        return (<LiItem item={item} clearLiItem={clearLiItem} key={item.id} />);
      })
      .reverse()
    );
  }

  render() {
    const { items, clearAllLiItems } = this.props;
    const LiItemElements = this.createLiItemElements(items);

    return (
      <div>
        <h3 className="page-header">
          <LiHeader
            totalNumberOfLiItems={this.determineLiItemsSum(items)}
            clearAllLiItems={clearAllLiItems}
          />
        </h3>
        <ul>
          {LiItemElements.length > 0 ? LiItemElements : <BlankList />}
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  clearLiItem: PropTypes.func.isRequired,
  clearAllLiItems: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired,
};

export default List;
