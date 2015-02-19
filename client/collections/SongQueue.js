// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  playFirst: function() {
    // find song at position 0 in queue and play it
    this.at(0).play();
    console.log('this', this);
    console.log('first song', this.at(0));
  }


});
