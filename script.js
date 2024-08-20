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


// modal js
// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const openModalBtn = document.getElementById('openModalBtn');

// Get the <span> element that closes the modal
const closeBtn = document.querySelector('.close');

// When the user clicks the button, open the modal
openModalBtn.onclick = function () {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// modal slideshow

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
} 