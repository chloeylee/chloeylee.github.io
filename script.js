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


// Select all image containers and scrollable image elements
const imageContainers = document.querySelectorAll('.image-container');
const scrollableImagesList = document.querySelectorAll('.scrollable-images');

imageContainers.forEach((imageContainer, index) => {
    const scrollableImages = scrollableImagesList[index];

    // Pre-calculate the translation value to avoid recalculating during hover
    let containerHeight = imageContainer.offsetHeight;
    let imagesHeight = scrollableImages.scrollHeight;
    let translateValue = containerHeight - imagesHeight;

    imageContainer.addEventListener('mouseover', () => {
        scrollableImages.style.transform = `translateY(${translateValue}px)`;
    });

    imageContainer.addEventListener('mouseout', () => {
        scrollableImages.style.transform = `translateY(0)`;
    });

    // Update values on window resize for responsiveness
    window.addEventListener('resize', () => {
        containerHeight = imageContainer.offsetHeight;
        imagesHeight = scrollableImages.scrollHeight;
        translateValue = containerHeight - imagesHeight;
    });
});
