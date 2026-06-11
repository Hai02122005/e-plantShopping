import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
removeItem,
updateQuantity
} from "./CartSlice";

function CartItem() {
const dispatch = useDispatch();

const cartItems = useSelector(
(state) => state.cart.cartItems
);

const calculateItemTotal = (item) => {
return item.price * item.quantity;
};

const handleIncrease = (
id,
quantity
) => {
dispatch(
updateQuantity({
id,
quantity: quantity + 1
})
);
};

const handleDecrease = (
id,
quantity
) => {
if (quantity > 1) {
dispatch(
updateQuantity({
id,
quantity: quantity - 1
})
);
}
};

const handleDelete = (id) => {
dispatch(removeItem(id));
};

const totalAmount = cartItems.reduce(
(sum, item) =>
sum +
item.price * item.quantity,
0
);

return ( <div> <h1>Shopping Cart</h1>

```
  {cartItems.map((item) => (
    <div key={item.id}>
      <img
        src={item.image}
        alt={item.name}
        width="120"
      />

      <h3>{item.name}</h3>

      <p>
        Unit Price:
        ${item.price}
      </p>

      <p>
        Total Cost:
        ${calculateItemTotal(
          item
        )}
      </p>

      <button
        onClick={() =>
          handleDecrease(
            item.id,
            item.quantity
          )
        }
      >
        -
      </button>

      <span>
        {item.quantity}
      </span>

      <button
        onClick={() =>
          handleIncrease(
            item.id,
            item.quantity
          )
        }
      >
        +
      </button>

      <button
        onClick={() =>
          handleDelete(item.id)
        }
      >
        Delete
      </button>

      <hr />
    </div>
  ))}

  <h2>
    Total Amount:
    ${totalAmount}
  </h2>

  <a href="/products">
    <button>
      Continue Shopping
    </button>
  </a>

  <button
    onClick={() =>
      alert("Coming Soon")
    }
  >
    Checkout
  </button>
</div>
```

);
}

export default CartItem;
