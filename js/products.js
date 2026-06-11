/**
 * X Store - products.js (نسخة آمنة ومعدلة بالكامل وحل مشكلة المنيو)
 */

// تحديث عداد السلة فوراً عند تشغيل الملف
updateCartCounter();

// تشغيل وتجهيز العمليات عند تحميل الصفحة بالكامل في حدث واحد منظم
document.addEventListener('DOMContentLoaded', () => {
  // 1. تشغيل المنيو أولاً لضمان عمله تحت أي ظرف
  setupMenuToggle();
  
  // 2. تشغيل بقية دوال المنتجات والفلاتر والمودال بأمان
  displayProducts(products);
  setupFilters();
  setupSort();
  setupFilterToggle();
  setupQuickViewModalClose();
});

// دالة التحكم في قائمة المنيو (الهيدر)
function setupMenuToggle() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('navbar-menu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
}

// دالة عرض المنتجات في شبكة العرض (Grid)
function displayProducts(productsToDisplay) {
  const grid = document.getElementById('products-grid');
  if (!grid) return; // حماية في حال عدم وجود الجريد
  
  grid.innerHTML = '';
  
  productsToDisplay.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-badge">-${product.discount}%</div>
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          <span>★ ${product.rating}</span>
          <span>(${product.reviews})</span>
        </div>
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
    
    card.style.cursor = 'pointer';
    card.addEventListener('click', (event) => {
      if (event.target.closest('button')) return;
      window.location.href = `product-details.html?id=${product.id}`;
    });

    card.querySelector('.quick-view-btn').addEventListener('click', (event) => {
      event.stopPropagation();
      openQuickView(product.id);
    });
    card.querySelector('.add-cart-btn').addEventListener('click', (event) => {
      event.stopPropagation();
      addToCart(product.id, 1);
      showNotification('تم إضافة المنتج إلى السلة بنجاح!');
    });
    
    grid.appendChild(card);
  });
}

// دالة الفلاتر وتصفية المنتجات
function setupFilters() {
  // 1. استماع التغيير في فئات المنتجات (Radio Buttons)
  const categoryRadios = document.querySelectorAll('input[name="category"]');
  categoryRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      applyAllFilters();
    });
  });

  // 2. استماع التغيير في شريط السعر (Range Slider)
  const priceRange = document.getElementById('price-range');
  const priceValue = document.getElementById('price-value');
  
  if (priceRange && priceValue) {
    priceRange.addEventListener('input', (e) => {
      // تحديث الرقم المكتوب أمام المستخدم فوراً أثناء تحريك الشريحة
      priceValue.textContent = e.target.value;
      applyAllFilters();
    });
  }

  // 3. استماع التغيير في المقاسات (Size Checkboxes)
  const sizeCheckboxes = document.querySelectorAll('.filter-group:nth-of-type(3) input[type="checkbox"]');
  sizeCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      applyAllFilters();
    });
  });

  // 4. استماع التغيير في الألوان (Color Checkboxes)
  const colorCheckboxes = document.querySelectorAll('.filter-group:nth-of-type(4) input[type="checkbox"]');
  colorCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      applyAllFilters();
    });
  });

  // 5. زر إعادة تعيين الفلاتر (Reset Filters Button)
  const resetButton = document.getElementById('reset-filters');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      // إعادة الفئة إلى الكل (All)
      if(categoryRadios.length > 0) categoryRadios[0].checked = true;
      
      // إعادة شريط السعر إلى أقصى قيمة (500)
      if (priceRange && priceValue) {
        priceRange.value = 500;
        priceValue.textContent = '500';
      }
      
      // إلغاء تحديد كل المقاسات والألوان
      const allCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
      allCheckboxes.forEach(cb => cb.checked = false);

      // إعادة عرض كافة المنتجات الأصلية
      displayProducts(products);
    });
  }

  // 6. فلتر البحث العلوي (لو موجود في الهيدر)
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      applyAllFilters();
    });
  }
}

// دالة الفلترة الشاملة الذكية المتوافقة مع الفلاتر الجديدة
function applyAllFilters() {
  let filtered = [...products];

  // أولاً: فلترة الفئات (Category)
  const selectedCategory = document.querySelector('input[name="category"]:checked');
  if (selectedCategory) {
    const categoryValue = selectedCategory.value;
    if (categoryValue !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === categoryValue);
    }
  }

  // ثانياً: فلترة السعر (Price Range)
  const priceRange = document.getElementById('price-range');
  if (priceRange) {
    const maxPrice = Number(priceRange.value);
    filtered = filtered.filter(p => p.price <= maxPrice);
  }

  // ثالثاً: فلترة المقاسات (Sizes)
  // بنجمع كل المقاسات اللي المستخدم علم عليها صح
  const checkedSizes = Array.from(document.querySelectorAll('.filter-group:nth-of-type(3) input[type="checkbox"]:checked')).map(cb => cb.value.toUpperCase());
  if (checkedSizes.length > 0) {
    filtered = filtered.filter(p => {
      // نتأكد إن المنتج يحتوي على الأقل على مقاس واحد من اللي اختارهم المستخدم
      if (!p.sizes) return false;
      return p.sizes.some(size => checkedSizes.includes(size.toUpperCase()));
    });
  }

  // رابعاً: فلترة الألوان (Colors)
  // بنجمع كل الألوان اللي المستخدم علم عليها صح
  const checkedColors = Array.from(document.querySelectorAll('.filter-group:nth-of-type(4) input[type="checkbox"]:checked')).map(cb => cb.value.toLowerCase());
  if (checkedColors.length > 0) {
    filtered = filtered.filter(p => {
      // نتأكد إن المنتج يحتوي على لون من الألوان المختارة
      if (!p.colors) return false;
      return p.colors.some(color => checkedColors.includes(color.toLowerCase()));
    });
  }

  // خامساً: فلترة البحث (Search Input)
  const searchInput = document.getElementById('search-input');
  if (searchInput && searchInput.value.trim() !== '') {
    const query = searchInput.value.toLowerCase().trim();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
  }

  // عرض النتيجة النهائية المفلترة للمستخدم
  displayProducts(filtered);
}

// دالة فتح نافذة العرض السريع (Modal)
function openQuickView(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  const modalImagePlaceholder = document.getElementById('modal-image-placeholder');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalOldPrice = document.getElementById('modal-old-price');
  const modalDescription = document.getElementById('modal-description');
  const modalAddToCart = document.getElementById('modal-add-to-cart');
  const modalViewDetails = document.getElementById('modal-view-details');

  if (modalImagePlaceholder) {
    modalImagePlaceholder.innerHTML = `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">`;
  }
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalPrice) modalPrice.textContent = `$${product.price}`;
  if (modalOldPrice) modalOldPrice.textContent = `$${product.oldPrice}`;
  if (modalDescription) modalDescription.textContent = product.description;

  if (modalAddToCart) {
    // إزالة الأحداث السابقة لضمان عدم التكرار
    const newAddToCart = modalAddToCart.cloneNode(true);
    modalAddToCart.parentNode.replaceChild(newAddToCart, modalAddToCart);
    newAddToCart.addEventListener('click', () => {
      addToCart(product.id, 1);
      showNotification('تم إضافة المنتج إلى السلة بنجاح!');
      modal.classList.remove('active');
    });
  }

  if (modalViewDetails) {
    const newViewDetails = modalViewDetails.cloneNode(true);
    modalViewDetails.parentNode.replaceChild(newViewDetails, modalViewDetails);
    newViewDetails.addEventListener('click', () => {
      window.location.href = `product-details.html?id=${product.id}`;
    });
  }

  if (modal) modal.classList.add('active');
}

// دالة إغلاق المودال
function setupQuickViewModalClose() {
  const modal = document.getElementById('quick-view-modal');
  const closeBtn = document.querySelector('.modal-close');
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

// دالة الترتيب (الفرز) حسب السعر والأحدث
function setupSort() {
  const sortSelect = document.getElementById('sort-select');
  if (!sortSelect) return;

  sortSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    let sorted = [...products];
    
    switch (value) {
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

// دالة التحكم في إظهار وإخفاء الفلاتر في الشاشات الصغيرة والـ Mobile
function setupFilterToggle() {
  const filterToggle = document.getElementById('filter-toggle');
  const filters = document.querySelector('.filters');
  if (!filterToggle || !filters) return;

  filterToggle.addEventListener('click', () => {
    filters.classList.toggle('active');
    const isVisible = filters.classList.contains('active');
    filterToggle.textContent = isVisible ? 'إخفاء الفلاتر' : 'عرض الفلاتر';
  });
}

// دالة إنشاء وعرض الإشعارات المنبثقة التلقائية
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