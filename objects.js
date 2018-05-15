var playlist = {
  Mario : 'Song Bird'
}

var updatePlaylist = function(playlist,artist,title) {
  return Object.assign(playlist,{
    [artist]:title
  });
}

var removeFromPlaylist = function(playlist,artist){
  var check = delete playlist.artist;
  if(!check)
   return;
  else
  return playlist;
}
