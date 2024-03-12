document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq");
  // const searches = document.querySelectorAll(".search");

  faqs.forEach(faq => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });

  // searches.forEach(search => {
  //   search.addEventListener("click", () => {
  //     search.classList.toggle("active");
  //   });
  // });
});

// document.addEventListener('DOMContentLoaded', function () {
//   var modal = document.getElementById('modal');
//   var icon = document.querySelector('.ec-icon');
//   var closeBtn = document.querySelector('.close');

//   icon.addEventListener('click', function () {
//     modal.style.display = 'block';
//   });

//   closeBtn.addEventListener('click', function () {
//     modal.style.display = 'none';
//   });
// });

// const initSlider = (sliderId, imageListId, prevButtonId, nextButtonId) => {
//   const imageList = document.getElementById(imageListId);
//   const prevButton = document.getElementById(prevButtonId);
//   const nextButton = document.getElementById(nextButtonId);

//   prevButton.addEventListener("click", () => {
//     const scrollAmount = imageList.clientWidth;
//     imageList.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//   });

//   nextButton.addEventListener("click", () => {
//     const scrollAmount = imageList.clientWidth;
//     imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
//   });
// };

// window.addEventListener("load", () => {
//   initSlider("popular-slider", "popular-image-list", "prev-popular-slide", "next-popular-slide");
//   initSlider("new-slider", "new-image-list", "prev-new-slide", "next-new-slide");
//   initSlider("third-slider", "third-image-list", "prev-third-slide", "next-third-slide")
// });


const mySlider = new Splide('#mySlider', {
  type: 'loop',
  rewind: true,
  rewindSpeed: 40,
  autoplay: true,
  interval: 3000,
  paginationDirection: 'rtl',
  pagination: true,
  paginationType: 'progress',
  arrows: 'hide',
  breakpoints: {
    800: {
      arrows: false,
    }
  }
});

mySlider.mount();


const initSlider = (sliderId, imageListId, prevButtonId, nextButtonId) => {
  const imageList = document.getElementById(imageListId);
  const prevButton = document.getElementById(prevButtonId);
  const nextButton = document.getElementById(nextButtonId);

  const imageWidth = imageList.querySelector(".image-item").offsetWidth;

  prevButton.addEventListener("click", () => {
    const scrollAmount = imageWidth;
    imageList.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    const scrollAmount = imageWidth;
    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
};

window.addEventListener("load", () => {
  initSlider("popular-slider", "popular-image-list", "prev-popular-slide", "next-popular-slide");
  initSlider("new-slider", "new-image-list", "prev-new-slide", "next-new-slide");
  initSlider("third-slider", "third-image-list", "prev-third-slide", "next-third-slide")
});
