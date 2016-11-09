module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Meeseeks Box',
        image: 'MeeseeksHQ.png',
        description: 'Hi I\'m Mr. Meeseeks!',
        variants: [
          {
            sku: '123123',
            type: 'Single',
            price: 4.99,
            inventory: 3

          },
          {
            sku: '123124',
            type: 'Six pack',
            price: 12.99,
            inventory: 5
          },
          {
            sku: '1231235',
            type: '24 pack',
            price: 49.99,
            inventory: 2
          }
        ]
      }
    ]));
  }

};