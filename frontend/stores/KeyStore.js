var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');
var Note = require('../util/Note');
var Tones = require('../constants/Tones');

var _notes = [], _handlers = [];

//Stores take a dispatcher as an argument to their constructor
//Store is now registered with the dispatcher
var KeyStore = new Store (AppDispatcher);

//register
//Here the Store determines if it cares about what happened
//Stores must implement this method
//Run after dispatch is called. Loops through with payload
//and does something based on conditions
KeyStore.__onDispatch = function (payload) {
  if (payload.actionType === "KEY_DOWN") {
    if (_notes.indexOf(payload.noteName) === -1) {
      
      //changing notes array
      _notes.push(payload.noteName);

      //Notify listeners that something has changed
      KeyStore.__emitChange();
      console.log(_notes);
    }
  } else if (payload.actionType === "KEY_UP") {
    var idx = _notes.indexOf(payload.noteName);
    if (idx >= 0) {
      _notes.splice(idx, 1);
      KeyStore.__emitChange();
      console.log(_notes);
    }
  }
};

KeyStore.all = function () {
  return _notes.slice();
};

module.exports = KeyStore;
