if ( $('[data-ytID]').length ) {
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.

  var player;
  function onYouTubeIframeAPIReady() {
    var ytID = $('[data-ytID]').attr('data-ytID');
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: ytID,
      playerVars: { 
        'showinfo':0,
        'controls':0, 
        'rel':0,
        'fs':0,
        'modestbranding':1,
        'loop':1,
      },
      events: {
        'onReady': onPlayerReady
        //'onStateChange': onPlayerStateChange
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    console.log(event.target);
    // $('.humanise-video__poster').hide();
    var autoplay = $('[data-ytID]').attr('data-autoplay');
    if ( autoplay == 1 ) {
      event.target.mute();
      event.target.playVideo();
    }  else {
      // event.target.mute();
      // event.target.playVideo();
    }
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  // var done = false;
  // function onPlayerStateChange(event) {
  //   if (event.data == YT.PlayerState.PLAYING && !done) {
  //     setTimeout(stopVideo, 6000);
  //     done = true;
  //   }
  // }
  // function stopVideo() {
  //   player.stopVideo();
  // }

}

