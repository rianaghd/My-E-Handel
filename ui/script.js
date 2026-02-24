document.addEventListener("DOMContentLoaded", () => {
  // Lista med produkter
  const products = [
    { name: "Proteinbar Choklad", price: 25, category: "proteinbar", img: "https://via.placeholder.com/150?text=Proteinbar" },
    { name: "Proteinbar Vanilj", price: 25, category: "proteinbar", img: "https://via.placeholder.com/150?text=Proteinbar" },
    { name: "Sportdryck Apelsin", price: 30, category: "dryck", img: "https://via.placeholder.com/150?text=Dryck" },
    { name: "Sportdryck Bär", price: 30, category: "dryck", img: "https://via.placeholder.com/150?text=Dryck" },
    { name: "Shaker Röd", price: 120, category: "tillbehor", img: "https://via.placeholder.com/150?text=Shaker" },
    { name: "Shaker Blå", price: 120, category: "tillbehor", img: "https://via.placeholder.com/150?text=Shaker" },
  ];

  // Varukorg
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Uppdatera cart count
  function updateCartCount() {
    const cartCountElem = document.getElementById("cart-count");
    if (cartCountElem) cartCountElem.textContent = cart.length;
  }

  // Render produkter på index.html
  function renderProducts(filter = "all") {
    const container = document.getElementById("product-list");
    if (!container) return;

    container.innerHTML = "";
    products
      .filter(p => filter === "all" || p.category === filter)
      .forEach(p => {
        const card = document.createElement("article");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${p.img}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>Pris: ${p.price} kr</p>
          <button class="add-cart-btn">Lägg i varukorg</button>
        `;
        card.querySelector(".add-cart-btn").addEventListener("click", () => {
          cart.push(p);
          localStorage.setItem("cart", JSON.stringify(cart));
          updateCartCount();
          alert(`${p.name} lades till i varukorg`);
        });
        container.appendChild(card);
      });
  }

  // Filter dropdown
  const filterSelect = document.getElementById("category-filter");
  if (filterSelect) {
    filterSelect.addEventListener("change", e => renderProducts(e.target.value));
  }

  // Render cart på page2.html
  function renderCart() {
    const container = document.getElementById("cart-items");
    if (!container) return;

    container.innerHTML = "";
    let total = 0;
    cart.forEach((p, i) => {
      total += p.price;
      const item = document.createElement("div");
      item.innerHTML = `
        <p>${p.name} - ${p.price} kr 
          <button data-index="${i}" class="remove-btn">Ta bort</button>
        </p>
      `;
      container.appendChild(item);
    });

    const totalElem = document.getElementById("total-price");
    if (totalElem) totalElem.textContent = total;

    container.querySelectorAll(".remove-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
        updateCartCount();
      });
    });
  }

  // Initial render
  renderProducts();
  renderCart();
  updateCartCount();
});