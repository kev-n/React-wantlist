import React, { Component } from "react";
import List from "./List";
import AppendItem from "./AppendItem";

class ModLi extends Component {
  constructor() {
    super();
    this.state = {
      list: {}
    };

    this.clearLiItem = this.clearLiItem.bind(this);
    this.clearAllLiItems = this.clearAllLiItems.bind(this);
    this.AppendItem = this.AppendItem.bind(this);
  }

  amendLi(list) {
    this.setState({
      list
    });
  }

  AppendItem(item) {
    const { list } = this.state;
    list[item.id] = item;
    this.amendLi(list);
  }

  clearLiItem(itemId) {
    const { list } = this.state;
    delete list[itemId];
    this.amendLi(list);
  }

  clearAllLiItems() {
    this.amendLi({});
  }

  render() {
    const items = this.state.list;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <List
              items={items}
              clearLiItem={this.clearLiItem}
              clearAllLiItems={this.clearAllLiItems}
            />
          </div>
          <div className="col-sm-6">
            <AppendItem AppendItem={this.AppendItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default ModLi;