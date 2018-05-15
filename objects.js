var playlist = {
  Mario : 'Song Bird'
}

var updatePlaylist = function(playlist,artist,title) {
  return Object.assign(playlist,{
    [artist]:title
  });
}