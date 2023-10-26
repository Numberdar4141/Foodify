import React, { useState } from 'react';
import v3Image from '../Assests//v3.jpg';


const product = [
  { id: 1, name: 'Product 1', price: 20, quantity: 1, image:'../Assests/v3.jpg' },
  { id: 2, name: 'Product 2', price: 25, quantity: 2, image: 'product2.jpg' },
  { id: 3, name: 'Product 3', price: 25, quantity: 2, image: 'product2.jpg' },
  { id: 4, name: 'Product 4', price: 25, quantity: 2, image: 'product2.jpg' },
  { id: 5, name: 'Product 5', price: 25, quantity: 0, image: 'product2.jpg' },
  { id: 6, name: 'Product 6', price: 25, quantity: 0, image: 'product2.jpg' },
  { id: 7, name: 'Product 7', price: 25, quantity: 0, image: 'product2.jpg' },
  // Add more products as needed
];

const MyCart = () => {
  const [cart, setCart] = useState(product);

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleQuantityChange = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8">My Cart</h1>
      {cart.map((product) => (
        <div key={product.id} className="flex items-center justify-between mb-4 p-4 border rounded">
          <div className="flex items-center">
            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded mr-4" />
            <div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
              onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
            >
              -
            </button>
            <span>{product.quantity}</span>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
              onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
            >
              +
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
              onClick={() => handleRemoveProduct(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="text-xl font-semibold mt-8">Total Price: ${getTotalPrice()}</div>
      <button className="bg-green-500 text-white px-6 py-3 rounded mt-4 hover:bg-green-600">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default MyCart;
