module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'A Thing',
        image: '',
        description: 'it does stuff',
        variants: [
          {
            sku: '123123',
            type: 'Single',
            price: 4.99,
            inventory: 3

          },
          {
            sku: '123124',
            type: '6 Pack',
            price: 12.99,
            inventory: 5
          },
          {
            sku: '1231235',
            type: '30 Pack',
            price: 19.99,
            inventory: 2
          }
        ]
      }
    ]));
  }

};