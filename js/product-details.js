// Setup on page load
document.addEventListener('DOMContentLoaded', function() {
  setupMenuToggle();
  updateCartCounter();
  loadProductDetails();
  setupTabs();
  setupAddToCart();
  loadRelatedProducts();
});

function setupMenuToggle() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('navbar-menu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
}

function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id')) || 1;
}

function loadProductDetails() {
  const productId = getProductIdFromURL();
  const product = getProductById(productId);
  
  if (!product) {
    document.querySelector('.product-detail').innerHTML = '<p style="grid-column: 1/-1;">Product not found.</p>';
    return;
  }
  
  // Update title and breadcrumb
  document.getElementById('product-title').textContent = product.name;
  document.getElementById('breadcrumb-product').textContent = product.name;
  
  // Update price
  document.getElementById('product-price').textContent = `$${product.price}`;
  document.getElementById('product-old-price').textContent = `$${product.oldPrice}`;
  document.getElementById('product-discount').textContent = `-${product.discount}%`;
  
  // Update description
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('tab-description').textContent = product.description;
  
  // Update materials
  document.getElementById('material-text').textContent = product.material;
  document.getElementById('care-text').textContent = product.care;
  document.getElementById('fit-text').textContent = product.fit;
  
  // Setup size and color selects
  setupSizeSelector(product);
  setupColorSelector(product);
}

function setupSizeSelector(product) {
  const sizeSelect = document.getElementById('size-select');
  sizeSelect.innerHTML = '<option value="">Select Size</option>';
  
  product.sizes.forEach(size => {
    const option = document.createElement('option');
    option.value = size;
    option.textContent = size;
    sizeSelect.appendChild(option);
  });
}

function setupColorSelector(product) {
  const colorSelect = document.getElementById('color-select');
  colorSelect.innerHTML = '<option value="">Select Color</option>';
  
  product.colors.forEach(color => {
    const option = document.createElement('option');
    option.value = color;
    option.textContent = color;
    colorSelect.appendChild(option);
  });
}

function setupAddToCart() {
  const productId = getProductIdFromURL();
  const product = getProductById(productId);
  const addBtn = document.getElementById('add-to-cart-btn');
  const qtyInput = document.getElementById('quantity');
  const qtyIncrease = document.getElementById('qty-increase');
  const qtyDecrease = document.getElementById('qty-decrease');
  const sizeSelect = document.getElementById('size-select');
  const colorSelect = document.getElementById('color-select');
  
  qtyIncrease.addEventListener('click', () => {
    qtyInput.value = Math.max(1, parseInt(qtyInput.value) + 1);
  });
  
  qtyDecrease.addEventListener('click', () => {
    qtyInput.value = Math.max(1, parseInt(qtyInput.value) - 1);
  });
  
  addBtn.addEventListener('click', () => {
    const quantity = parseInt(qtyInput.value) || 1;
    const size = sizeSelect.value;
    const color = colorSelect.value;
    
    if (!size) {
      showNotification('Please select a size');
      return;
    }
    if (!color) {
      showNotification('Please select a color');
      return;
    }
    
    addToCart(product.id, quantity, size, color);
    showNotification('Added to cart!');
    qtyInput.value = 1;
  });
}

function setupTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.dataset.tab;
      
      // Remove active from all
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active to clicked
      button.classList.add('active');
      document.querySelector(`.tab-content[data-tab="${tabName}"]`).classList.add('active');
    });
  });
}

function loadRelatedProducts() {
  const productId = getProductIdFromURL();
  const relatedProducts = getRelatedProducts(productId);
  const container = document.getElementById('related-products-grid');
  
  if (!container || relatedProducts.length === 0) return;
  
  container.innerHTML = '';
  relatedProducts.forEach(product => {
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
      window.location.href = `product-details.html?id=${product.id}`;
    });
    
    card.querySelector('.add-cart-btn').addEventListener('click', () => {
      addToCart(product.id, 1);
      showNotification('Added to cart!');
    });
    
    container.appendChild(card);
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
