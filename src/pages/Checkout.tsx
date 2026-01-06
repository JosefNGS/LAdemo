import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { AppRoute } from '../types';

interface CheckoutProps {
  setActiveRoute?: (route: AppRoute) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ setActiveRoute }) => {
  const { items, getTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'nxc' | 'usd' | 'card'>('usd');
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const subtotal = getTotal();
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setLoading(false);
    setCompleted(true);
    clearCart();
  };

  if (completed) {
    return (
      <div className="space-y-8">
        <div className="glass-card p-12 rounded-3xl border border-white/5 text-center">
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold font-display mb-4">Order Confirmed!</h2>
          <p className="text-gray-400 mb-2">Thank you for your purchase</p>
          <p className="text-sm text-gray-500 mb-8">A confirmation email has been sent to {formData.email}</p>
          <div className="flex gap-4 justify-center">
            {setActiveRoute && (
              <>
                <button
                  onClick={() => setActiveRoute(AppRoute.DASHBOARD)}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
                >
                  Go to Dashboard
                </button>
                <button
                  onClick={() => setActiveRoute(AppRoute.SHOP)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                >
                  Continue Shopping
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold font-display">Checkout</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Payment Method */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-4">Payment Method</h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setPaymentMethod('usd')}
                className={`p-4 rounded-xl border transition-all ${
                  paymentMethod === 'usd'
                    ? 'border-purple-500 bg-purple-500/10'
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                <p className="font-bold text-sm">USD</p>
                <p className="text-xs text-gray-500">Credit Card</p>
              </button>
              <button
                onClick={() => setPaymentMethod('nxc')}
                className={`p-4 rounded-xl border transition-all ${
                  paymentMethod === 'nxc'
                    ? 'border-purple-500 bg-purple-500/10'
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                <p className="font-bold text-sm">NXC</p>
                <p className="text-xs text-gray-500">Token Payment</p>
              </button>
              <button
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-xl border transition-all ${
                  paymentMethod === 'card'
                    ? 'border-purple-500 bg-purple-500/10'
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                <p className="font-bold text-sm">Card</p>
                <p className="text-xs text-gray-500">Debit/Credit</p>
              </button>
            </div>
          </div>

          {/* Payment Details */}
          <form onSubmit={handleSubmit} className="glass-card p-6 rounded-3xl border border-white/5 space-y-4">
            <h3 className="text-xl font-bold mb-4">Payment Details</h3>
            
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>

            {paymentMethod === 'card' && (
              <>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim() })}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').substring(0, 5) })}
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value.replace(/\D/g, '').substring(0, 3) })}
                      placeholder="123"
                      maxLength={3}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                </div>
              </>
            )}

            {paymentMethod === 'nxc' && (
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-sm text-cyan-400 font-bold mb-2">NXC Payment</p>
                <p className="text-xs text-gray-400">
                  You will be redirected to your wallet to confirm the transaction. 
                  Required: {(total / 3).toFixed(2)} NXC (at $3.00/NXC)
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl font-bold shadow-xl shadow-purple-900/40 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing Payment...
                </span>
              ) : (
                `Pay $${total.toFixed(2)}`
              )}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="glass-card p-6 rounded-3xl border border-white/5 sticky top-8">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.type}`} className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-white/5 space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Tax (5%)</span>
                <span className="font-bold">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/5">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-purple-400">${total.toFixed(2)}</span>
              </div>
            </div>
            {setActiveRoute && (
              <button
                onClick={() => setActiveRoute(AppRoute.CART)}
                className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all text-sm"
              >
                ← Back to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

