fetch('anime.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById("product-container");

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <video class="product-video" src="${product.image}" autoplay muted loop playsinline></video> 
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">Rs. ${product.price}</p>
        <a href="https://wa.me/+94776626569" class="whatsapp-button" target="_blank">
          Chat with us on <br> WhatsApp
        </a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading products:", error);
  });


// FAQ toggle
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Background music toggle
const audio = document.getElementById("bg-music");
const toggleButton = document.getElementById("music-toggle");
let isPlaying = false;

toggleButton.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    toggleButton.textContent = "🔊";
  } else {
    audio.pause();
    toggleButton.textContent = "🔇";
  }
  isPlaying = !isPlaying;
});
