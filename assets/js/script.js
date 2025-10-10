// script.js

// Select all nav links and pages
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("article[data-page]");

// Add click event to nav links
navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    // Remove active class from all nav links and pages
    navLinks.forEach(btn => btn.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));

    // Add active class to clicked link and corresponding page
    link.classList.add("active");
    pages[index].classList.add("active");
  });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    portfolioItems.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

