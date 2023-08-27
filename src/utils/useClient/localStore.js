const handleAddToCart = (id) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const existingItemIndex = cartItems.findIndex((item) => item._id === id);

  if (existingItemIndex !== -1) {
    const updatedCartItems = [...cartItems];

    updatedCartItems[existingItemIndex].quantity += 1;

    const updatedCartItemsString = JSON.stringify(updatedCartItems);

    localStorage.setItem("cartItems", updatedCartItemsString);
  } else {
    const newItem = {
      _id: id,
      quantity: 1,
    };
    const updatedCartItems = [...cartItems, newItem];

    const updatedCartItemsString = JSON.stringify(updatedCartItems);

    localStorage.setItem("cartItems", updatedCartItemsString);
  }
  alert("Product has been added");
};
