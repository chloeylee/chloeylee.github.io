// project video on hover on desktop/laptops

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

// on mobile, video should autoplay when the video is in view
document.addEventListener('DOMContentLoaded', function () {
  function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  if (isMobile()) {
    var autoplayVideos = document.querySelectorAll('.autoplay-video');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var video = entry.target;

        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, {
      threshold: 0.5
    });

    autoplayVideos.forEach(function (video) {
      observer.observe(video);
    });
  }
});
