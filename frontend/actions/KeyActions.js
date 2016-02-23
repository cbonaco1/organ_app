var Mapping = require('../constants/Mapping');
var AppDispatcher = require('../dispatcher/Dispatcher');

var KeyActions = {
  //called from listener when a key event happens (up or down)
  keyPressed: function(key) {
    //payload contais what happened
    var payload = {noteName: Mapping[key], actionType:"KEY_DOWN" };

    //Run through all callbacks registered with dispatcher
    //Stores will determine if they care to do anything
    //based on the payload
    AppDispatcher.dispatch(payload);
  },

  keyReleased: function(key) {
    var payload = {noteName: Mapping[key], actionType:"KEY_UP" };
    AppDispatcher.dispatch(payload);
  }

};

module.exports = KeyActions;
