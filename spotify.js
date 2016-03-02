// spotify.js
// ========
var spotify = require('spotify-node-applescript');

module.exports = {
  playTrack: function (trackId, callback) {
    spotify.playTrack(trackId, function() { callback(); });
  },

  getCurrentTrack: function(callback) {
    spotify.getTrack(function(err, track) {
      callback(track);
    });
  },

  stop: function(callback) {
    spotify.pause(function() {
      callback("No stop function for shopify, used pause instead");
    });
  },

  next: function() {
  }
};
