import React, { Component } from 'react';
import ItemDesc from './ItemDesc';
import PropTypes from 'prop-types';

class LiItem extends Component {
  submissionHandle = event => {
    event.preventDefault();
    const { clearLiItem } = this.props;
    const LiItemId = this.props.item.id;
    clearLiItem(LiItemId);
  }

  render() {
    const { item } = this.props;

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          {`${item.quantity} x ${item.name}`}
        </div>
        {item.description.length > 0 ? <ItemDesc description={item.description} /> : ''}
        <div className="panel-footer">
          <form className="form-inline" onSubmit={this.submissionHandle}>
            <button type="submit" className="btn btn-warning btn-xs">Remove</button>
          </form>
        </div>
      </div>
    );
  }
}

LiItem.propTypes = {
  item: PropTypes.object.isRequired,
  clearLiItem: PropTypes.func.isRequired,
};

export default LiItem;
