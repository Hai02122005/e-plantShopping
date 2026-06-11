import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList() {
const dispatch = useDispatch();

const cartItems = useSelector(
(state) => state.cart.cartItems
);

const totalItems = cartItems.reduce(
(sum, item) => sum + item.quantity,
0
);

const [addedItems, setAddedItems] = useState([]);

const plants = {
"Aromatic Plants": [
{ id: 1, name: "Lavender", price: 10, image: "lavender.jpg" },
{ id: 2, name: "Mint", price: 8, image: "mint.jpg" },
{ id: 3, name: "Rosemary", price: 12, image: "rosemary.jpg" },
{ id: 4, name: "Basil", price: 9, image: "basil.jpg" },
{ id: 5, name: "Thyme", price: 7, image: "thyme.jpg" },
{ id: 6, name: "Sage", price: 11, image: "sage.jpg" }
],

```
"Medicinal Plants": [
  { id: 7, name: "Aloe Vera", price: 15, image: "aloe.jpg" },
  { id: 8, name: "Tulsi", price: 10, image: "tulsi.jpg" },
  { id: 9, name: "Neem", price: 14, image: "neem.jpg" },
  { id: 10, name: "Chamomile", price: 13, image: "chamomile.jpg" },
  { id: 11, name: "Echinacea", price: 16, image: "echinacea.jpg" },
  { id: 12, name: "Ginseng", price: 18, image: "ginseng.jpg" }
],

"Decorative Plants": [
  { id: 13, name: "Monstera", price: 25, image: "monstera.jpg" },
  { id: 14, name: "Snake Plant", price: 20, image: "snake.jpg" },
  { id: 15, name: "Pothos", price: 18, image: "pothos.jpg" },
  { id: 16, name: "Peace Lily", price: 22, image: "lily.jpg" },
  { id: 17, name: "ZZ Plant", price: 24, image: "zz.jpg" },
  { id: 18, name: "Spider Plant", price: 17, image: "spider.jpg" }
]
```

};

const handleAddToCart = (plant) => {
dispatch(
addItem({
...plant,
quantity: 1
})
);

```
setAddedItems([...addedItems, plant.id]);
```

};

return ( <div> <nav> <a href="/">Home</a>
{" | "} <a href="/products">Plants</a>
{" | "} <a href="/cart">
Cart ({totalItems}) </a> </nav>

```
  <h1>Paradise Nursery</h1>

  {Object.entries(plants).map(
    ([category, items]) => (
      <div key={category}>
        <h2>{category}</h2>

        <div>
          {items.map((plant) => (
            <div key={plant.id}>
              <img
                src={plant.image}
                alt={plant.name}
                width="120"
              />

              <h3>{plant.name}</h3>

              <p>
                Price: ${plant.price}
              </p>

              <button
                disabled={addedItems.includes(
                  plant.id
                )}
                onClick={() =>
                  handleAddToCart(plant)
                }
              >
                {addedItems.includes(
                  plant.id
                )
                  ? "Added to Cart"
                  : "Add To Cart"}
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  )}
</div>
```

);
}

export default ProductList;
