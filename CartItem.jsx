const totalAmount = cartItems.reduce(
(sum, item) => sum + item.price * item.quantity,
0
);

{cartItems.map((item) => (

  <div key={item.id}>

```
<img src={item.image} alt={item.name} />

<h3>{item.name}</h3>

<p>Unit Price: ${item.price}</p>

<p>
  Total Cost:
  ${item.price * item.quantity}
</p>

<button
  onClick={() =>
    dispatch(decrementQuantity(item.id))
  }
>
  -
</button>

<span>{item.quantity}</span>

<button
  onClick={() =>
    dispatch(incrementQuantity(item.id))
  }
>
  +
</button>

<button
  onClick={() =>
    dispatch(removeItem(item.id))
  }
>
  Delete
</button>
```

  </div>
))}

<h2>Total Amount: ${totalAmount}</h2>

<Link to="/products">
  Continue Shopping
</Link>

<button
onClick={() => alert("Coming Soon")}

>

Checkout </button>
