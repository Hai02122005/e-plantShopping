function CartItem() {
return (

Shopping Cart

  <div>
    <img src="" alt="" />
    <h3>Plant Name</h3>
    <p>Unit Price: $20</p>
    <p>Total Cost: $40</p>

    <button>-</button>
    <span>2</span>
    <button>+</button>

    <button>Delete</button>
  </div>

  <h2>Total Amount: $40</h2>

  <button>Continue Shopping</button>

  <button
    onClick={() => alert("Coming Soon")}
  >
    Checkout
  </button>
</div>

);
}

export default CartItem;
