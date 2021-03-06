var React = require('react');
var Key = require('./key');
var Tones = require('../constants/Tones');
var Recorder = require('./Recorder');

var Organ = React.createClass({
  render: function() {
    var keys = Object.keys(Tones).map(function (note) {
      return <Key key={note} noteName={note} />;
    });

    return (
      <div className="organ group">
        {keys}
        <Recorder />
      </div>
    );
  }
});

module.exports = Organ;
