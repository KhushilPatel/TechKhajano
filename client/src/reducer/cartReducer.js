const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    let existingProduct = state?.cart?.find((curElem) => curElem.id === id + color);
    if (existingProduct) {
      let updatedProduct = state?.cart?.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;
          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct ?? [],
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...(state.cart ?? []), cartProduct],
      };
    }
  }
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state?.cart?.filter((curItem) => curItem.id !== action.payload);
    return {
      ...state,
      cart: updatedCart ?? [],
    };
  }
  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state?.cart?.map((curElem) => {
      if (curElem.id === action.payload) {
        let IncrementAmount = curElem.amount + 1;
        if (IncrementAmount >= curElem.max) {
          IncrementAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: IncrementAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct ?? [],
    };
  }
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state?.cart?.map((curElem) => {
      if (curElem.id === action.payload) {
        let decrementAmount = curElem.amount - 1;
        if (decrementAmount <= 1) {
          decrementAmount = 1;
        }
        return {
          ...curElem,
          amount: decrementAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct ?? [],
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemValue = state?.cart?.reduce((initialVal, curElem) => {
      let { amount } = curElem;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_item: updatedItemValue,
    };
  }
  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state?.cart?.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;
      initialVal = initialVal + price * amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_price,
    };
  }
  if (action.type === "GET_CART") {
    // Update state with cart data fetched from Firebase
    return {
      ...state,
      cart: action.payload ?? [], // Set cart to empty array if payload is null
    };
  }
  return state;
};

export default cartReducer;
