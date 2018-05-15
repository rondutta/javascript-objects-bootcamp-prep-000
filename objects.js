var playlist = {
  Mario : 'Song Bird'
}

var updatePlaylist = function(playlist,artist,title) {
  return Object.assign(playlist,{
    [artist]:title
  });
}

var play;

var removeFromPlaylist = function(playlist,artist){
  for (play in playlist){
    if (play===artist){
      delete playlist[artist];
    }
  }
  return playlist;
}
