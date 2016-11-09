var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');

// Flux cart view
var FluxCart = React.createClass({

  // Hide cart via Actions
  closeCart: function(){
    FluxCartActions.updateCartVisible(false);
  },

  // Show cart via Actions
  openCart: function(){
    FluxCartActions.updateCartVisible(true);
  },

  // Remove item from Cart via Actions
  removeFromCart: function(sku){
    FluxCartActions.removeFromCart(sku);
    FluxCartActions.updateCartVisible(true);
  },
  
  updateQuantity: function(sku, val, update)
  {
    FluxCartActions.updateQuantity(sku, val, update);
    FluxCartActions.updateCartVisible(true);
  },
  
  clearCart: function()
  {
    FluxCartActions.clearCart(); 
    FluxCartActions.updateCartVisible(true)
  },

  // Render cart view
  render: function() {
    var self = this, cart = this.props.cart, selectedProduct = this.props.products, variant, vars;
    return (
      <div className={"flux-cart " + (this.props.visible ? 'active' : '')}>
        <div className="mini-cart">
          <button type="button" className="close-cart" onClick={this.closeCart}>×</button>
          <ul>
          {Object.keys(cart).map(function(product){
            
              
              for(var i = 0; i < selectedProduct.variants.length; i++){
                if(selectedProduct.variants[i].sku == product){
                  variant = selectedProduct.variants[i];
                }
              }
              
              
              var avail = variant.inventory - cart[product].quantity;

              var update = {
                name: cart[product].name,
                type: cart[product].type,
                price: cart[product].price
              }
              return (
                <li key={product}>
                  <h1 className="name">{cart[product].name}</h1>
                  <p className="type">{cart[product].type} x {cart[product].quantity}</p>
                  <p className="price">${(cart[product].price * cart[product].quantity).toFixed(2)}</p>
                  <div className="productOptions">
                    <button type="button" className="changeQty" onClick={self.updateQuantity.bind(self, cart[product].sku, false, update)} >-</button>
                    <button type="button" className="remove-item" onClick={self.removeFromCart.bind(self, product)}>Remove</button>
                    <button type="button" className="changeQty" onClick={self.updateQuantity.bind(self, cart[product].sku, true, update)} disabled = {avail > 0 ? '' : 'disabled'} /*{ats > 0 ? '' : 'disabled'}*/>+</button>
                  </div>
                </li>
              )
            })}
          </ul>
          <span className="total">Total: ${this.props.total}<button type="button" className="clearCart" onClick={self.clearCart} disabled={Object.keys(this.props.cart).length > 0 ? "" : "disabled"}>Clear Cart</button></span>
          
        </div>
        <button type="button" className="view-cart" onClick={this.openCart} disabled={Object.keys(this.props.cart).length > 0 ? "" : "disabled"}>View Cart ({this.props.count})</button>
      </div>
    );
  },

});

module.exports = FluxCart;

