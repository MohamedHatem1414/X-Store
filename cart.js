// Setup on page load
document.addEventListener('DOMContentLoaded', () => {
  setupMenuToggle();
  updateCartCounter();
  displayCart();
  setupRemoveButtons();
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

function displayCart() {
  const cart = getCart();
  const container = document.getElementById('cart-items-body');
  const emptyMessage = document.getElementById('empty-cart-message');
  
  if (cart.length === 0) {
    emptyMessage.style.display = 'flex';
    container.innerHTML = '';
    updateCartSummary([]);
    return;
  }
  
  emptyMessage.style.display = 'none';
  container.innerHTML = '';
  
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    const product = getProductById(item.id);
    const imageEmoji = product ? product.image : (item.image || '👔');
    
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="cart-item-image">${imageEmoji}</div>
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p style="margin: 0;">Size: <strong>${item.size}</strong> | Color: <strong>${item.color}</strong></p>
        <p class="cart-item-price" style="margin: 5px 0 0 0;">$${item.price.toFixed(2)}</p>
      </div>
      <div class="cart-quantity-control">
        <button class="qty-btn" data-index="${index}" data-action="decrease">−</button>
        <input type="number" value="${item.quantity}" readonly>
        <button class="qty-btn" data-index="${index}" data-action="increase">+</button>
      </div>
      <div class="cart-item-total">$${itemTotal.toFixed(2)}</div>
      <button class="cart-item-remove remove-btn" data-index="${index}" title="Remove item">×</button>
    `;
    
    container.appendChild(cartItem);
  });
  
  setupRemoveButtons();
  setupQuantityButtons();
  updateCartSummary(cart);
}

function setupRemoveButtons() {
  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      const cart = getCart();
      cart.splice(index, 1);
      saveCart(cart);
      updateCartCounter();
      displayCart();
    });
  });
}

function setupQuantityButtons() {
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      const action = e.target.dataset.action;
      const cart = getCart();
      
      if (action === 'increase') {
        cart[index].quantity++;
      } else if (action === 'decrease' && cart[index].quantity > 1) {
        cart[index].quantity--;
      }
      
      saveCart(cart);
      updateCartCounter();
      displayCart();
    });
  });
}

function updateCartSummary(cart) {
  let subtotal = 0;
  
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });
  
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;
  
  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}
