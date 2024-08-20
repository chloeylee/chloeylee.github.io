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
document.addEventListener('DOMContentLoaded', () => {
  // Function to open modal
  const openModal = (modalId) => {
    document.getElementById(modalId).style.display = 'block';
  };

  // Function to close modal
  const closeModal = (modalId) => {
    document.getElementById(modalId).style.display = 'none';
  };

  // Add event listeners to open modal buttons
  document.querySelectorAll('.open-modal-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const modalId = button.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  // Add event listeners to close buttons
  document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      closeModal(modalId);
    });
  });

  // Close modal if user clicks outside of it
  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      closeModal(event.target.id);
    }
  });
});


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