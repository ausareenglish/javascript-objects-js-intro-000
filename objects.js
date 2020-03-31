var playlist = {
<<<<<<< HEAD
'Kanye': 'Yikes',
'Tupac': 'Changes'
};

function updatePlaylist(playlist,artistName, songTitle) {
=======
  Slowdive: 'Alison',
 'My Bloody Valentine': 'Sometimes'
};

function updatePlaylist(playlist, artistName, songTitle) {
  
  playlist[artistName] = songTitle;
>>>>>>> 195e5c2e0d81c114081cc4d7e8e7b4500da08b36
  
  playlist[artistName] = songTitle;
  return playlist;
  
}

<<<<<<< HEAD
function removeFromPlaylist(playlist, artistName) {
  
delete playlist[artistName];
=======
updatePlaylist();




function removeFromPlaylist(playlist, artistName) {
  
delete playlist.artistName;
>>>>>>> 195e5c2e0d81c114081cc4d7e8e7b4500da08b36

return playlist; 
  
}
  
  
  

