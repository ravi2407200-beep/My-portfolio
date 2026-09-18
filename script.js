// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {

  // 1. CURSOR GLOW EFFECT
  const glow = document.querySelector(".cursor-glow");
  if (glow) {
    window.addEventListener("mousemove", function(e) {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }

  // 2. SCROLL REVEAL ANIMATION (Smooth Fade In on Scroll)
  const revealElements = document.querySelectorAll(".reveal");
  
  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add("active");
      }
    });
  }
  
  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run once on load

  // 3. FULLSCREEN LIGHTBOX IMAGE PREVIEW
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.querySelector(".lightbox-close");
  const clickableImages = document.querySelectorAll(".clickable-img");

  clickableImages.forEach(img => {
    img.addEventListener("click", function() {
      lightbox.classList.add("show");
      lightboxImg.src = this.src;
      lightboxCaption.innerText = this.alt || "Project View";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("show");
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", function(e) {
      if (e.target !== lightboxImg) {
        closeLightbox();
      }
    });
  }

  // Close Lightbox on ESC key press
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });

  // 4. MOBILE MENU TOGGLE
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function() {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function() {
        navMenu.classList.remove("open");
      });
    });
  }

});
