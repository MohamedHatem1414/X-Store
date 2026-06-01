const products = [
  {
    id: 1,
    name: "Premium Wool Coat",
    category: "women",
    price: 299,
    oldPrice: 499,
    discount: 40,
    image: "👗",
    images: ["👗", "👗", "👗"],
    colors: ["Black", "Navy Blue", "Camel"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 234,
    description: "Luxurious wool coat crafted from premium Italian wool. Perfect for any occasion.",
    material: "100% Wool",
    care: "Dry clean only",
    fit: "Tailored fit",
    origin: "Italy"
  },
  {
    id: 2,
    name: "Classic White T-Shirt",
    category: "men",
    price: 49,
    oldPrice: 79,
    discount: 38,
    image: "👔",
    images: ["👔", "👔"],
    colors: ["White", "Black", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    reviews: 456,
    description: "Timeless white t-shirt made from soft, breathable cotton.",
    material: "100% Cotton",
    care: "Machine wash cold",
    fit: "Regular fit",
    origin: "Portugal"
  },
  {
    id: 3,
    name: "Luxury Leather Handbag",
    category: "accessories",
    price: 399,
    oldPrice: 699,
    discount: 43,
    image: "👜",
    images: ["👜", "👜"],
    colors: ["Black", "Brown", "Tan"],
    sizes: ["One Size"],
    rating: 4.9,
    reviews: 312,
    description: "Elegant Italian leather handbag with gold-tone hardware.",
    material: "Leather",
    care: "Wipe with soft cloth",
    fit: "One Size",
    origin: "Italy"
  },
  {
    id: 4,
    name: "Designer Sneakers",
    category: "shoes",
    price: 189,
    oldPrice: 329,
    discount: 43,
    image: "👠",
    images: ["👠", "👠"],
    colors: ["White", "Black", "Gray"],
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    rating: 4.7,
    reviews: 523,
    description: "Premium minimalist sneakers with premium comfort design.",
    material: "Leather & Canvas",
    care: "Wipe with damp cloth",
    fit: "True to size",
    origin: "Portugal"
  },
  {
    id: 5,
    name: "Silk Dress",
    category: "women",
    price: 279,
    oldPrice: 459,
    discount: 39,
    image: "💃",
    images: ["💃", "💃"],
    colors: ["Black", "Burgundy", "Navy"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.8,
    reviews: 287,
    description: "Elegant silk dress perfect for special occasions.",
    material: "100% Silk",
    care: "Dry clean only",
    fit: "Fitted",
    origin: "France"
  },
  {
    id: 6,
    name: "Linen Shirt",
    category: "men",
    price: 129,
    oldPrice: 189,
    discount: 32,
    image: "👕",
    images: ["👕", "👕"],
    colors: ["White", "Light Blue", "Khaki"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 198,
    description: "Comfortable linen shirt for warm weather.",
    material: "100% Linen",
    care: "Machine wash warm",
    fit: "Relaxed fit",
    origin: "Portugal"
  },
  {
    id: 7,
    name: "Leather Belt",
    category: "accessories",
    price: 89,
    oldPrice: 149,
    discount: 40,
    image: "✨",
    images: ["✨"],
    colors: ["Black", "Brown", "Tan"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    rating: 4.5,
    reviews: 156,
    description: "Premium leather belt with elegant buckle.",
    material: "Leather",
    care: "Wipe clean",
    fit: "Adjustable",
    origin: "Spain"
  },
  {
    id: 8,
    name: "Formal Dress Shoes",
    category: "shoes",
    price: 219,
    oldPrice: 379,
    discount: 42,
    image: "👞",
    images: ["👞", "👞"],
    colors: ["Black", "Brown", "Burgundy"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    rating: 4.7,
    reviews: 289,
    description: "Elegant formal dress shoes with premium comfort.",
    material: "Leather",
    care: "Polish with soft cloth",
    fit: "True to size",
    origin: "Italy"
  },
  {
    id: 9,
    name: "Cashmere Sweater",
    category: "women",
    price: 249,
    oldPrice: 419,
    discount: 41,
    image: "🧥",
    images: ["🧥", "🧥"],
    colors: ["Black", "White", "Gray", "Cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 401,
    description: "Luxury cashmere sweater, incredibly soft and warm.",
    material: "100% Cashmere",
    care: "Hand wash delicate",
    fit: "Regular fit",
    origin: "Scotland"
  },
  {
    id: 10,
    name: "Denim Jeans",
    category: "men",
    price: 129,
    oldPrice: 199,
    discount: 35,
    image: "👖",
    images: ["👖", "👖"],
    colors: ["Dark Blue", "Light Blue", "Black"],
    sizes: ["30", "31", "32", "33", "34", "36"],
    rating: 4.6,
    reviews: 567,
    description: "Classic denim jeans with premium comfort fit.",
    material: "100% Cotton Denim",
    care: "Machine wash cold",
    fit: "Skinny fit",
    origin: "USA"
  }
];

function getProductById(id) {
  return products.find(p => p.id === id);
}

function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

function getRelatedProducts(productId) {
  const product = getProductById(productId);
  if (!product) return [];
  
  const related = products.filter(p => 
    p.category === product.category && p.id !== productId
  );
  return related.slice(0, 4);
}

function filterProducts(filters) {
  let filtered = products;
  
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(p => p.category === filters.category);
  }
  
  if (filters.minPrice !== undefined) {
    filtered = filtered.filter(p => p.price >= filters.minPrice);
  }
  
  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter(p => p.price <= filters.maxPrice);
  }
  
  if (filters.search) {
    const search = filters.search.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search)
    );
  }
  
  return filtered;
}

function addToCart(productId, quantity = 1, size = '', color = '') {
  const cart = getCart();
  const product = getProductById(productId);
  
  if (!product) return;
  
  const cartItem = cart.find(item => 
    item.id === productId && item.size === size && item.color === color
  );
  
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: size || 'N/A',
      color: color || 'N/A'
    });
  }
  
  saveCart(cart);
  updateCartCounter();
}

function removeFromCart(productId, size = '', color = '') {
  const cart = getCart();
  const index = cart.findIndex(item =>
    item.id === productId && item.size === size && item.color === color
  );
  
  if (index > -1) {
    cart.splice(index, 1);
  }
  
  saveCart(cart);
  updateCartCounter();
}

function updateCartQuantity(productId, quantity, size = '', color = '') {
  const cart = getCart();
  const item = cart.find(item =>
    item.id === productId && item.size === size && item.color === color
  );
  
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
    } else {
      item.quantity = quantity;
      saveCart(cart);
    }
  }
  
  updateCartCounter();
}

function getCart() {
  const cart = localStorage.getItem('storeCart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('storeCart', JSON.stringify(cart));
}

function updateCartCounter() {
  const cart = getCart();
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const counter = document.getElementById('cart-count');
  
  if (counter) {
    counter.textContent = totalQuantity;
    counter.style.display = totalQuantity > 0 ? 'flex' : 'none';
  }
}

function clearCart() {
  localStorage.removeItem('storeCart');
  updateCartCounter();
}
