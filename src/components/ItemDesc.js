import React from 'react';
import PropTypes from 'prop-types';

const ItemDesc = ({ description }) => (
  <div className="panel-body">
    {description}
  </div>
);

ItemDesc.propTypes = {
  Description: PropTypes.string.isRequired,
};

export default ItemDesc;
