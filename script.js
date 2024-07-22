// ----------------Slider----------------------//
const slider = document.getElementById("slider");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
let activeSlideIndex = 0;

const updateActiveSlide = () => {
  const slides = slider.children;
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[activeSlideIndex].classList.add("active");
};

leftArrow.addEventListener("click", () => {
  if (activeSlideIndex > 0) {
    activeSlideIndex--;
    slider.scrollBy(-100, 0);
    updateActiveSlide();
  }
});

rightArrow.addEventListener("click", () => {
  if (activeSlideIndex < slider.children.length - 1) {
    activeSlideIndex++;
    slider.scrollBy(100, 0);
    updateActiveSlide();
  }
});
// ----------------Slider----------------------//

// ----------------Tab----------------------//
function setupTabs(containerId) {
  const container = document.getElementById(containerId);
  const tabs = container.querySelectorAll(".tab");
  const tabContents = container.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((tc) => tc.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
}

setupTabs("tabs1");
setupTabs("tabs2");
setupTabs("tabs3");
setupTabs("tabs4");
