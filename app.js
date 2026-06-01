// Setup on page load
document.addEventListener('DOMContentLoaded', () => {
  setupMenuToggle();
  updateCartCounter();
  loadBestSellers();
  loadNewArrivals();
  loadFeaturedProducts();
  setupNewsletterForm();
});

function setupMenuToggle() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('navbar-menu');
  
  if (toggle) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
}

function loadBestSellers() {
  const container = document.getElementById('bestSellersGrid');
  if (!container) return;
  
  const bestSellers = products.slice(0, 4);
  renderProducts(bestSellers, container);
}

function loadNewArrivals() {
  const container = document.getElementById('newArrivalsGrid');
  if (!container) return;
  
  const newArrivals = products.slice(4, 8);
  renderProducts(newArrivals, container);
}

function loadFeaturedProducts() {
  const container = document.getElementById('featuredGrid');
  if (!container) return;
  
  const featured = products.slice(8, 12);
  renderProducts(featured, container);
}

function renderProducts(productList, container) {
  container.innerHTML = '';
  
  productList.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div style="position: relative;">
        <div class="product-image">👔</div>
        <span class="product-discount">-${product.discount}%</span>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">
          <span class="price-current">$${product.price}</span>
          <span class="price-old">$${product.oldPrice}</span>
        </div>
        <div class="product-actions">
          <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
          <button class="add-cart-btn" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `;
    
    card.querySelector('.quick-view-btn').addEventListener('click', () => {
      window.location.href = `product-details.html?id=${product.id}`;
    });
    
    card.querySelector('.add-cart-btn').addEventListener('click', () => {
      addToCart(product.id, 1);
      showNotification('Added to cart!');
    });
    
    container.appendChild(card);
  });
}

function setupNewsletterForm() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (input && input.value) {
      showNotification('Thank you for subscribing!');
      input.value = '';
    }
  });
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: #4CAF50;
    color: white;
    padding: 1rem 2rem;
    border-radius: 5px;
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add stylesheet for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(400px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(400px); opacity: 0; }
  }
`;
document.head.appendChild(style);
