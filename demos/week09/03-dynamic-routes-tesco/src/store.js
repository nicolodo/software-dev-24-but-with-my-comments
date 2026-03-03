// store.js

/**
 * A list of products available in our fictional grocery store.
 */
const products = [
    { 
      id: 330681072, 
      name: "Organic Honeycrisp Apples (1lb)", 
      price: 4.99, 
      category: "Produce", 
      inStock: true 
    },
    { 
      id: 849201156, 
      name: "Whole Wheat Sourdough Loaf", 
      price: 5.49, 
      category: "Bakery", 
      inStock: true 
    },
    { 
      id: 102948573, 
      name: "Free-Range Large Eggs (Dozen)", 
      price: 6.29, 
      category: "Dairy", 
      inStock: false 
    },
    { 
      id: 558392014, 
      name: "Unsweetened Almond Milk (64oz)", 
      price: 3.99, 
      category: "Dairy Alternatives", 
      inStock: true 
    },
    { 
      id: 774829103, 
      name: "Fair Trade Dark Chocolate Bar", 
      price: 2.99, 
      category: "Snacks", 
      inStock: true 
    },
    { 
      id: 229485710, 
      name: "Colombian Roast Coffee Beans (12oz)", 
      price: 12.50, 
      category: "Beverages", 
      inStock: true 
    },
    { 
      id: 994827163, 
      name: "Fresh Baby Spinach (Bag)", 
      price: 3.49, 
      category: "Produce", 
      inStock: true 
    }
  ];
  
  /**
   * Finds a specific product by its unique ID.
   * * @param {number} productId - The 9-digit ID of the product to find.
   * @returns {object|undefined} Returns the product object if found, or undefined if it doesn't exist.
   */
  const findProductById = (productId) => {
    return products.find(product => product.id === productId);
  };
  
  // Exporting the products array and the lookup function so they can be used in other files
  export { products, findProductById };