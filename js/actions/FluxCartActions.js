var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/FluxCartConstants');

// Define actions object
var FluxCartActions = {

  // Receive inital product data
  receiveProduct: function(data) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECEIVE_DATA,
      data: data
    })
  },

  // Set currently selected product variation
  selectProduct: function(index) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.SELECT_PRODUCT,
      data: index
    })
  },

  // Add item to cart
  addToCart: function(sku, update) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_ADD,
      sku: sku,
      update: update
    })
  },

  // Remove item from cart
  removeFromCart: function(sku) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_REMOVE,
      sku: sku
    })
  },

  // Update cart visibility status
  updateCartVisible: function(cartVisible) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_VISIBLE,
      cartVisible: cartVisible
    })
  },
  
  updateQuantity: function(sku, incr, update)
  {
    if(incr)
    {
        AppDispatcher.handleAction({
          actionType: FluxCartConstants.CART_ADD,
          sku: sku,
          update: update
        })
    }
    else
    {
        AppDispatcher.handleAction({
          actionType: FluxCartConstants.CART_REMOVE_ONE,
          sku: sku,
          update: update
        })
    }
  },
  
  clearCart: function()
  {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_CLEAR
    })
  }
  
};

module.exports = FluxCartActions;