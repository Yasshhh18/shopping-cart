import React from 'react';
import '../styles/cart.css';

const Cart = ({ cart = [], setCart }) => {

  const updateQty = (id, type) => {
    setCart(prev =>
      prev.map(item => {
        if (item.id === id) {
          const qty = item.amount || 1;
          return {
            ...item,
            amount: type === "inc" ? qty + 1 : Math.max(1, qty - 1),
          };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce((sum, item) => {
    const qty = item.amount || 1;
    const price = Number(item.price) || 0;
    return sum + price * qty;
  }, 0);

  return (
    <section className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty">Cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-box" key={item.id}>
                <div className="cart_img">
                  <img src={item.img} alt={item.title || 'item'} />
                </div>

                <div className="cart-details">
                  <h4>{item.title}</h4>
                  {item.author && <p className="author">{item.author}</p>}
                  <p className="price">₹{item.price}</p>

                  <div className="qty-controls">
                    <button onClick={() => updateQty(item.id, "dec")}>−</button>
                    <span>{item.amount || 1}</span>
                    <button onClick={() => updateQty(item.id, "inc")}>+</button>
                  </div>

                  <button
                    className="remove"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <h3>Total: ₹{totalPrice}</h3>
            <button className="clear" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
