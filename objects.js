var playlist = {
  Mario : 'Song Bird'
}

var updatePlaylist = function(playlist,artist,title) {
  return Object.assign(playlist,{
    [artist]:title
  });
}

var removeFromPlaylist = function(playlist,artist){
  if(artist){
  delete playlist.artist;
  }
  return playlist;
}
