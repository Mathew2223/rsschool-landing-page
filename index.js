document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    if (themeToggleBtn) themeToggleBtn.textContent = "☀️";
  } else {
    if (themeToggleBtn) themeToggleBtn.textContent = "🌙";
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-theme");

      if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeToggleBtn.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "light");
        themeToggleBtn.textContent = "🌙";
      }
    });
  }

  const slides = document.querySelectorAll(".carousel .slide");

  if (slides.length > 0) {
    if (!document.querySelector(".slide.active")) {
      slides[0].classList.add("active");
    }

    const nextBtn = document.querySelector(".rightArr .carousel-button");
    const prevBtn = document.querySelector(".leftArr .carousel-button");

    if (nextBtn) {
      nextBtn.addEventListener("click", onNext);
    }
    if (prevBtn) {
      prevBtn.addEventListener("click", onPrev);
    }
  }
});

function onNext() {
  const slides = document.querySelectorAll(".carousel .slide");
  if (slides.length === 0) return;

  const currentIndex = Array.from(slides).findIndex((slide) =>
    slide.classList.contains("active"),
  );

  if (currentIndex === -1) {
    slides[0].classList.add("active");
    return;
  }

  const nextIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.remove("active");
  slides[nextIndex].classList.add("active");
}

function onPrev() {
  const slides = document.querySelectorAll(".carousel .slide");
  if (slides.length === 0) return;

  const currentIndex = Array.from(slides).findIndex((slide) =>
    slide.classList.contains("active"),
  );

  if (currentIndex === -1) {
    slides[slides.length - 1].classList.add("active");
    return;
  }

  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].classList.remove("active");
  slides[prevIndex].classList.add("active");
}
