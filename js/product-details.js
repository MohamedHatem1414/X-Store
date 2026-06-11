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
  
  // Update rating text
  const ratingLabel = document.querySelector('.rating small');
  if (ratingLabel) {
    ratingLabel.textContent = `${product.rating} / 5 (${product.reviews} customer reviews)`;
  }
  
  // Update description
  const descriptionEl = document.getElementById('product-description');
  if (descriptionEl) descriptionEl.textContent = product.description;
  const tabDescriptionEl = document.getElementById('tab-description');
  if (tabDescriptionEl) tabDescriptionEl.textContent = product.description;
  
  // Update images
  const mainImageContainer = document.querySelector('.product-main-image');
  mainImageContainer.innerHTML = `<img src="${product.image}" alt="${product.name}" id="main-product-img" style="width: 100%; height: 100%; object-fit: cover;">`;
  
  const thumbsContainer = document.querySelector('.product-thumbs');
  thumbsContainer.innerHTML = '';
  
  if (product.images && product.images.length > 0) {
    product.images.forEach((imgStr, index) => {
      const thumb = document.createElement('div');
      thumb.className = `thumb-img ${index === 0 ? 'active' : ''}`;
      thumb.innerHTML = `<img src="${imgStr}" style="width: 100%; height: 100%; object-fit: cover;">`;
      thumbsContainer.appendChild(thumb);
    });
    setupThumbnails();
  }
  
  // Populate options
  populateOptions(product);
  
  // Populate specs tab
  const materialEl = document.getElementById('material-text');
  if (materialEl) materialEl.textContent = product.material || 'N/A';
  const careEl = document.getElementById('care-text');
  if (careEl) careEl.textContent = product.care || 'N/A';
  const fitEl = document.getElementById('fit-text');
  if (fitEl) fitEl.textContent = product.fit || 'N/A';
}

function setupThumbnails() {
  const thumbs = document.querySelectorAll('.thumb-img');
  const thumbsContainer = document.querySelector('.product-thumbs');
  const mainImage = document.getElementById('main-product-img');

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      const clickedImgSrc = thumb.querySelector('img').src;
      if (mainImage) mainImage.src = clickedImgSrc;
    });

    thumb.setAttribute('aria-label', `View image ${index + 1}`);
  });

  const prevBtn = document.getElementById('thumb-prev');
  const nextBtn = document.getElementById('thumb-next');

  if (prevBtn && nextBtn && thumbsContainer) {
    prevBtn.addEventListener('click', () => {
      thumbsContainer.scrollBy({ left: -120, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      thumbsContainer.scrollBy({ left: 120, behavior: 'smooth' });
    });
  }
}

function populateOptions(product) {
  const colorSelect = document.getElementById('color-select');
  const sizeSelect = document.getElementById('size-select');

  if (colorSelect && product.colors) {
    colorSelect.innerHTML = '<option value="">Select Color</option>' +
      product.colors.map((color) => `<option value="${color}">${color}</option>`).join('');
  }

  if (sizeSelect && product.sizes) {
    sizeSelect.innerHTML = '<option value="">Select Size</option>' +
      product.sizes.map((size) => `<option value="${size}">${size}</option>`).join('');
  }

  // Setup quantity controls
  const minusBtn = document.getElementById('qty-decrease');
  const plusBtn = document.getElementById('qty-increase');
  const qtyInput = document.getElementById('quantity');

  if (minusBtn && plusBtn && qtyInput) {
    minusBtn.addEventListener('click', () => {
      let val = parseInt(qtyInput.value) || 1;
      if (val > 1) qtyInput.value = val - 1;
    });

    plusBtn.addEventListener('click', () => {
      let val = parseInt(qtyInput.value) || 1;
      qtyInput.value = val + 1;
    });
  }
}

function setupTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      
      tab.classList.add('active');
      const contentEl = document.getElementById(`${target}-tab`);
      if (contentEl) contentEl.classList.add('active');
    });
  });
}

function setupAddToCart() {
  const addBtn = document.getElementById('add-to-cart-btn');
  if (!addBtn) return;

  addBtn.addEventListener('click', () => {
    const productId = getProductIdFromURL();
    const qtyInput = document.getElementById('quantity');
    const quantity = qtyInput ? parseInt(qtyInput.value) || 1 : 1;

    const colorSelect = document.getElementById('color-select');
    const sizeSelect = document.getElementById('size-select');

    const color = colorSelect ? colorSelect.value : '';
    const size = sizeSelect ? sizeSelect.value : '';

    addToCart(productId, quantity, size, color);
    showNotification('Added to cart successfully!');
  });
}

function loadRelatedProducts() {
  const container = document.getElementById('relatedProductsGrid');
  if (!container) return;
  
  const productId = getProductIdFromURL();
  const related = getRelatedProducts(productId);
  
  container.innerHTML = '';
  
  related.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
      <div class="product-badge">-${product.discount}%</div>
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
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