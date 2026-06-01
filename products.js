// Setup menu toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  const menu = document.getElementById('navbar-menu');
  menu.classList.toggle('active');
});

// Update cart counter
updateCartCounter();

// Load products on page load
document.addEventListener('DOMContentLoaded', () => {
  displayProducts(products);
  setupFilters();
  setupSort();
  setupMenuToggle();
});

function setupMenuToggle() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('navbar-menu');
  
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

function displayProducts(productsToDisplay) {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';
  
  productsToDisplay.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div style="position: relative;">
        <div class="product-image">${product.image}</div>
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
      openQuickView(product);
    });
    
    card.querySelector('.add-cart-btn').addEventListener('click', () => {
      addToCart(product.id, 1);
      showNotification('Added to cart!');
    });
    
    grid.appendChild(card);
  });
}

function openQuickView(product) {
  const modal = document.getElementById('quick-view-modal');
  document.getElementById('modal-image-placeholder').textContent = product.image;
  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-price').textContent = `$${product.price}`;
  document.getElementById('modal-old-price').textContent = `$${product.oldPrice}`;
  document.getElementById('modal-description').textContent = product.description;
  
  const addBtn = document.getElementById('modal-add-to-cart');
  addBtn.onclick = () => {
    addToCart(product.id, 1);
    showNotification('Added to cart!');
    modal.classList.remove('active');
  };
  
  modal.classList.add('active');
}

document.getElementById('quick-view-modal').addEventListener('click', (e) => {
  if (e.target.id === 'quick-view-modal' || e.target.classList.contains('modal-close')) {
    e.currentTarget.classList.remove('active');
  }
});

function setupFilters() {
  // Category filter
  document.querySelectorAll('input[name="category"]').forEach(radio => {
    radio.addEventListener('change', applyFilters);
  });
  
  // Price range filter
  document.getElementById('price-range').addEventListener('input', (e) => {
    document.getElementById('price-value').textContent = e.target.value;
    applyFilters();
  });
  
  // Size filter
  document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
  });
  
  // Reset button
  document.getElementById('reset-filters').addEventListener('click', () => {
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
      input.checked = false;
    });
    document.querySelector('input[name="category"]').checked = true;
    document.getElementById('price-range').value = 500;
    document.getElementById('price-value').textContent = 500;
    displayProducts(products);
  });
}

function applyFilters() {
  const category = document.querySelector('input[name="category"]:checked').value;
  const maxPrice = parseInt(document.getElementById('price-range').value);
  const sizes = Array.from(document.querySelectorAll('.filter-group input[type="checkbox"]:checked'))
    .map(cb => cb.value);
  
  let filtered = products;
  
  // Filter by category
  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }
  
  // Filter by price
  filtered = filtered.filter(p => p.price <= maxPrice);
  
  // Filter by size (if any selected, show only products with those sizes)
  if (sizes.length > 0) {
    filtered = filtered.filter(p => sizes.some(size => p.sizes.includes(size.toUpperCase())));
  }
  
  displayProducts(filtered);
}

function setupSort() {
  document.getElementById('sort-select').addEventListener('change', (e) => {
    const value = e.target.value;
    let sorted = [...products];
    
    switch(value) {
      case 'newest':
        sorted = sorted.reverse();
        break;
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        sorted = [...products];
    }
    
    displayProducts(sorted);
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
