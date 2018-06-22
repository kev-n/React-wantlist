import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LiHeader extends Component {
  submissionHandle = event => {
    event.preventDefault();
    const { clearAllLiItems } = this.props;
    clearAllLiItems();
  }

  render() {
    const { totalNumberOfLiItems } = this.props;
    if (totalNumberOfLiItems > 0) {
      return (
        <form onSubmit={this.submissionHandle} className="form-inline">
          {totalNumberOfLiItems} {totalNumberOfLiItems === 1 ? 'item' : 'items'}
          {' '}
          <button className="btn btn-xs btn-danger" type="submit">Clear All</button>
        </form>
      );
    }
    return (<span>Want List</span>);
  }
}

LiHeader.propTypes = {
  clearAllLiItems: PropTypes.func.isRequired,
  totalNumberOfLiItems: PropTypes.number.isRequired,
};

export default LiHeader;
