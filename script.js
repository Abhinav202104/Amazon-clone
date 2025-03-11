// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    
  // 🔍 Search Bar Animation
  const searchBar = document.querySelector(".nav-search");
  searchBar.addEventListener("mouseover", function () {
      searchBar.style.transform = "scale(1.05)";
      searchBar.style.transition = "all 0.3s ease-in-out";
  });
  searchBar.addEventListener("mouseout", function () {
      searchBar.style.transform = "scale(1)";
  });

  // 🛒 Cart Update Feature
  let cartCount = 0;
  const cartIcon = document.querySelector(".nav-cart");
  
  cartIcon.addEventListener("click", function () {
      cartCount++;
      alert(`🛍️ Item added to cart! Total items: ${cartCount}`);
  });

  // 🏬 Hover Effect for Product Boxes
  const productBoxes = document.querySelectorAll(".box");
  productBoxes.forEach((box) => {
      box.addEventListener("mouseover", () => {
          box.style.transform = "scale(1.05)";
          box.style.transition = "0.3s";
          box.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
      });

      box.addEventListener("mouseout", () => {
          box.style.transform = "scale(1)";
          box.style.boxShadow = "none";
      });
  });

  // 🔝 Smooth Scroll to Top
  const backToTop = document.querySelector(".foot-panel");
  backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ✨ Flashing Text Effect in Hero Message
  const heroMessage = document.querySelector(".hero-message a");
  setInterval(() => {
      heroMessage.style.color = heroMessage.style.color === "red" ? "#007185" : "red";
  }, 500);
});
