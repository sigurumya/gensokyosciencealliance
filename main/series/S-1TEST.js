document.addEventListener("DOMContentLoaded", () => {
  const textBlocks = document.querySelectorAll(".status");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  textBlocks.forEach((block) => {
    observer.observe(block);
  });
});