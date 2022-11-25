import React, { Component } from 'react';
import './style.css';
import ProductData from './ProductData.js';
import ProdPreview from './ProdPreview/ProdPreview';
import ProdDetails from './ProdDetails/ProdDetails';
import HeaderComp from './Header/HeaderComp';

export default class App extends Component {
  state = {
    ProductData: ProductData,
    selectedItem: 0,
    selectedFeature: 0,
  };
  constructor(props) {
    super(props);
    this.onClickColor = this.onClickColor.bind(this);
    this.onClickFeature = this.onClickFeature.bind(this);
  }

  onClickColor(pos) {
    this.setState({ selectedItem: pos });
    console.log(this.state.selectedItem);
  }

  onClickFeature(pos) {
    this.setState({ selectedFeature: pos });
    console.log(this.state.selectedFeature);
  }

  render() {
    return (
      <div>
        <HeaderComp />
        <div className="Main-Container">
          <ProdPreview
            data={this.state.ProductData}
            sFeature={this.state.selectedFeature}
            sItem={this.state.selectedItem}
          />
          <ProdDetails
            data={this.state.ProductData}
            sItem={this.state.selectedItem}
            sFeature={this.state.selectedFeature}
            onClickColor={this.onClickColor}
            onClickFeature={this.onClickFeature}
          />
        </div>
      </div>
    );
  }
}
