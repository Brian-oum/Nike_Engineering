document.addEventListener("DOMContentLoaded", () => {

  // ===== Mobile Menu Toggle =====
  const menuBtn = document.getElementById("menu-btn");
  const mainMenu = document.getElementById("mainmenu");
  const overlay = document.getElementById("overlay");
  const icon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    mainMenu.classList.toggle("show");
    overlay.classList.toggle("active");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  overlay.addEventListener("click", () => {
    mainMenu.classList.remove("show");
    overlay.classList.remove("active");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });

  // Toggle submenus on mobile
  const menuItems = document.querySelectorAll("#mainmenu li:has(ul) > a");
  menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        item.parentElement.classList.toggle("open");
      }
    });
  });

  // ===== Swiper Slider =====
  const swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // ===== Counter Animation =====
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 700; // adjust speed

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

});
window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    
    // Keep preloader visible for 10 seconds minimum
    setTimeout(() => {
        preloader.classList.add("hidden");
    }, 1000); // 10000 ms = 10 seconds
});
