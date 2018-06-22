import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const requiredAsterisk = {
  color: '#97743a',
};

class AppendItem extends Component {
  submissionHandleEvent = event => {
    event.preventDefault();

    const item = {
      id: uuid.v4(),
      date: new Date(),
      name: this.ItemName.value.trim(),
      description: this.ItemDesc.value.trim(),
      quantity: this.ItemQuantity.value,
    };

    this.props.AppendItem(item);
  }

  render() {
    return (
      <form onSubmit={this.submissionHandleEvent}>
        <h3 className="page-header">Adjust Your List</h3>
        <p>* indicates a required field.</p>
        <div className="form-group">
          <label htmlFor="ItemName">Name <span style={requiredAsterisk}>*</span></label>
          <input
            type="text"
            className="form-control"
            id="ItemName"
            placeholder="Please enter the name of the item."
            required
            ref={input => this.ItemName = input}
          />
        </div>

        <div className="form-group">
          <label htmlFor="ItemDesc">Description</label>
          <textarea
            className="form-control"
            rows="3"
            id="ItemDesc"
            placeholder="You may enter a description for this item."
            ref={input => this.ItemDesc = input}
          />
        </div>

        <div className="form-group">
          <label htmlFor="ItemQuantity">Quantity <span style={requiredAsterisk}>*</span></label>
          <div className="row">
            <div className="col-xs-5 col-sm-6 col-md-4">
              <input
                type="number"
                min="1"
                max="9999"
                step="1"
                defaultValue="1"
                className="form-control"
                id="ItemQuantity"
                required
                ref={input => this.ItemQuantity = input}
              />
            </div>
          </div>
        </div>

        <hr />

        <button type="submit" className="btn btn-primary btn-lg">Add Item</button>
        <button type="reset" className="btn btn-danger btn-lg">Cancel</button>
      </form>
    );
  }
}

AppendItem.propTypes = {
  AppendItem: PropTypes.func.isRequired,
};

export default AppendItem;
