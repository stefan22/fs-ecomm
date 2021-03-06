import { actionTypes } from './action-types'

// Add item to cart
export const addItemCart = (item) => {
  return {
    type: actionTypes.CART_ADD,
    payload: item,
  }
}

// Delete Item from cart
export const delItemCart = (item) => {
  return {
    type: actionTypes.CART_DELETE,
    payload: item,
  }
}

// Update Item in cart
export const updateItemCart = (item, qty = 1, id) => {
  let itemUpdate = {}
  itemUpdate.id = id;
  itemUpdate.qty = qty;

  return {
    type: actionTypes.CART_UPDATE,
    payload: itemUpdate,
  }
}

export const clearCart = () => {
  return {
    type: actionTypes.CART_CLEAR,
  }
}

export const getCartTotal = (items) => {
  let sum = 0

  if (items.length > 0) {
    sum = items
      .map((itm) => itm.price * itm.qty)
      .reduce((total, price) => total + price)
  }

  return {
    type: actionTypes.CART_TOTAL_PRICE,
    payload: sum,
  }
}

export const totalCartItems = (items) => {
  let count = 0
  items &&
    items.map((itm) =>
      Number(itm.qty) > 1
        ? (count += Number(itm.qty))
        : Number((count += 1))
    )

  return {
    type: actionTypes.CART_TOTAL_ITEMS,
    payload: count,
  }
}
