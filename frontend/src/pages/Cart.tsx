import React from 'react';
import { useCart } from '../contexts/CartContext';
import { AppRoute } from '../types';

interface CartProps {
  onCheckout?: () => void;
  setActiveRoute?: (route: AppRoute) => void;
}

const Cart: React.FC<CartProps> = ({ onCheckout, setActiveRoute }) => {
  const { items, removeItem, updateQuantity, clearCart, getTotal, getItemCount } = useCart();

  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout();
    } else if (setActiveRoute) {
      setActiveRoute(AppRoute.CHECKOUT);
    }
  };

  if (items.length === 0) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold font-display">Shopping Cart</h2>
        </div>
        <div className="glass-card p-12 rounded-3xl border border-white/5 text-center">
          <div className="w-20 h-20 rounded-full bg-purple-600/10 flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">Add items from the Credits Shop or Marketplace to get started</p>
          {setActiveRoute && (
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setActiveRoute(AppRoute.SHOP)}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Browse Credits Shop
              </button>
              <button
                onClick={() => setActiveRoute(AppRoute.MARKETPLACE)}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
              >
                Browse Marketplace
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  const subtotal = getTotal();
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold font-display">Shopping Cart</h2>
        <button
          onClick={clearCart}
          className="text-sm text-gray-500 hover:text-red-400 font-bold transition-colors"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={`${item.id}-${item.type}`} className="glass-card p-6 rounded-3xl border border-white/5">
              <div className="flex gap-4">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      {item.amount && (
                        <p className="text-sm text-gray-500">{item.amount} NXC Credits</p>
                      )}
                      {item.type === 'product' && (
                        <p className="text-sm text-gray-500">Product</p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(`${item.id}-${item.type}`)}
                      className="text-gray-500 hover:text-red-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(`${item.id}-${item.type}`, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="font-bold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(`${item.id}-${item.type}`, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                      {item.quantity > 1 && (
                        <p className="text-xs text-gray-500">${item.price.toFixed(2)} each</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="glass-card p-6 rounded-3xl border border-white/5 sticky top-8">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Subtotal ({getItemCount()} items)</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Tax (5%)</span>
                <span className="font-bold">${tax.toFixed(2)}</span>
              </div>
              <div className="pt-4 border-t border-white/5 flex justify-between">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-purple-400">${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl font-bold shadow-xl shadow-purple-900/40 hover:scale-[1.02] transition-transform"
            >
              Proceed to Checkout
            </button>
            {setActiveRoute && (
              <button
                onClick={() => setActiveRoute(AppRoute.SHOP)}
                className="w-full mt-3 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
              >
                Continue Shopping
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;



