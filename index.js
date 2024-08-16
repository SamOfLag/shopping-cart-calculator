// Define the items in the shopping cart
const items = [
    { name: 'Tecno', price: 80, quantity: 4 },
    { name: 'iPhone', price: 400, quantity: 6 },
    { name: 'Samsung', price: 300, quantity: 3 }
  ];
  
  // Function to calculate the subtotal
  function calculateSubtotal(cartItems) {
    return cartItems.reduce((subtotal, item) => subtotal + (item.price * item.quantity), 0);
  }
  
  // Function to apply a discount
  function applyDiscount(subtotal, discountPercentage) {
    return subtotal - (subtotal * (discountPercentage / 100));
  }
  
  // Function to calculate the tax
  function calculateTax(discountedTotal, taxRate) {
    return discountedTotal + (discountedTotal * (taxRate / 100));
  }
  
  // Function to calculate the final total
  function calculateTotal(cartItems, discountPercentage, taxRate) {
    const subtotal = calculateSubtotal(cartItems);
    const discountedTotal = applyDiscount(subtotal, discountPercentage);
    const totalWithTax = calculateTax(discountedTotal, taxRate);
    return totalWithTax;
  }
  
  // Test the function\s with a sample discount and tax rate
  const discount = 10; // 10% discount
  const taxRate = 5;   // 5% tax
  
  const finalTotal = calculateTotal(items, discount, taxRate);
  console.log(`Final Total: $${finalTotal.toFixed(2)}`);
  