// Lista med produkter
const products = [
  { name: "Proteinbar", price: 25, category: "proteinbar" },
  { name: "Sportdryck", price: 30, category: "dryck" },
  { name: "Shaker", price: 120, category: "tillbehor" },
];

// Varukorg
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Uppdatera cart count
function updateCartCount() {
  document.getElementById("cart-count")?.textContent = cart.length;
}

// Render produkter på index.html
function renderProducts(filter="all") {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = "";
  products
    .filter(p => filter === "all" || p.category === filter)
    .forEach(p => {
      const card = document.createElement("article");
      card.className = "product-card";
      card.innerHTML = `
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
filterSelect?.addEventListener("change", e => renderProducts(e.target.value));

// Render cart page
function renderCart() {
  const container = document.getElementById("cart-items");
  if (!container) return;

  container.innerHTML = "";
  let total = 0;
  cart.forEach((p, i) => {
    total += p.price;
    const item = document.createElement("div");
    item.innerHTML = `
      <p>${p.name} - ${p.price} kr <button data-index="${i}" class="remove-btn">Ta bort</button></p>
    `;
    container.appendChild(item);
  });

  document.getElementById("total-price").textContent = total;

  container.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });
}

// Initial render
renderProducts();
renderCart();
updateCartCount();