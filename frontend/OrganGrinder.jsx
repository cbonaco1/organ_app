var React = require('react');
var ReactDOM = require('react-dom');
var KeyListener = require('./util/KeyListener');
var Organ = require('./components/organ');

$(document).ready(function () {
  var root = document.getElementById('root');
  ReactDOM.render(<Organ />, root);
});
