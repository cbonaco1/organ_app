// var KeyStore = require('../stores/KeyStore');
var KeyActions = require('../actions/KeyActions');

var KeyListener = function () {

    //Lets Action know when something happens
  $(document).keydown(function(event) {
    KeyActions.keyPressed(event.keyCode);
  });

  $(document).keyup(function(event) {
    KeyActions.keyReleased(event.keyCode);
  });
};

// $(KeyListener());
$(document).ready(function(e){
  KeyListener();
});




module.exports = KeyListener;
