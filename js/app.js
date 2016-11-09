window.React = require('react');
var ReactDOM = require('react-dom')
var ProductData = require('./ProductData');
var CartAPI = require('./utils/CartAPI')
var FluxCartApp = require('./components/FluxCartApp.react');
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link

// Load Mock Product Data into localStorage
ProductData.init();

// Load Mock API Call
CartAPI.getProductData();

// Render FluxCartApp Controller View
ReactDOM.render(
  <FluxCartApp />,
  document.getElementById('flux-cart')
);

