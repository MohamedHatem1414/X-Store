// تشغيل العمليات فور تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  setupMenuToggle();
  updateCartCounter();
  displayCart();
});

// دالة التحكم في المنيو والقائمة الجانبية للشاشات الصغيرة
function setupMenuToggle() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('navbar-menu');
  
  if (toggle && menu) {
    // إزالة أي أحداث سابقة لتفادي التكرار
    const newToggle = toggle.cloneNode(true);
    toggle.parentNode.replaceChild(newToggle, toggle);

    newToggle.addEventListener('click', (e) => {
      e.preventDefault();
      menu.classList.toggle('active');
    });
  }
}

// دالة عرض المنتجات في السلة
function displayCart() {
  const cart = getCart();
  const container = document.getElementById('cart-items-body');
  const emptyMessage = document.getElementById('empty-cart-message');
  
  if (!container || !emptyMessage) return;

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
    const row = document.createElement('div');
    row.className = 'cart-item';
    
    row.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px;">
        </div>
        <div class="cart-item-details">
          <h3 class="cart-item-name">${item.name}</h3>
          <p class="cart-item-meta">Size: ${item.size} | Color: ${item.color}</p>
          <span class="cart-item-price">$${item.price}</span>
        </div>
      </div>
      
      <div class="cart-item-quantity">
        <button class="qty-btn" data-index="${index}" data-action="decrease">-</button>
        <span class="qty-value">${item.quantity}</span>
        <button class="qty-btn" data-index="${index}" data-action="increase">+</button>
      </div>
      
      <div class="cart-item-total">
        $${itemTotal}
      </div>
      
      <button class="remove-item-btn" data-index="${index}">&times;</button>
    `;
    
    container.appendChild(row);
  });
  
  setupQuantityButtons();
  setupRemoveButtons();
  updateCartSummary(cart);
}

// دالة التحكم في حذف منتج من السلة
function setupRemoveButtons() {
  document.querySelectorAll('.remove-item-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      const cart = getCart();
      cart.splice(index, 1);
      saveCart(cart);
      if (typeof updateCartCounter === 'function') updateCartCounter();
      displayCart();
    });
  });
}

// دالة التحكم في زيادة ونقصان الكمية
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
      if (typeof updateCartCounter === 'function') updateCartCounter();
      displayCart();
    });
  });
}

// دالة تحديث ملخص الحسابات الإجمالية للطلب
function updateCartSummary(cart) {
  let subtotal = 0;
  
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });
  
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;
  
  const subtotalEl = document.getElementById('cart-subtotal');
  const taxEl = document.getElementById('cart-tax');
  const totalEl = document.getElementById('cart-total');
  
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}