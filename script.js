// project video on hover

document.addEventListener('DOMContentLoaded', function () {
    var hoverVideos = document.querySelectorAll('.hover-video');
  
    hoverVideos.forEach(function (video) {
      video.addEventListener('mouseover', function () {
        video.play();
      });
  
      video.addEventListener('mouseout', function () {
        video.pause();
      });
    });
  });
  