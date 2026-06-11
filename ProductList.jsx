const plants = {
Aromatic: [
{ id: 1, name: "Lavender", price: 10, image: "img1.jpg" },
{ id: 2, name: "Mint", price: 8, image: "img2.jpg" },
{ id: 3, name: "Rosemary", price: 12, image: "img3.jpg" },
{ id: 4, name: "Basil", price: 9, image: "img4.jpg" },
{ id: 5, name: "Sage", price: 11, image: "img5.jpg" },
{ id: 6, name: "Thyme", price: 7, image: "img6.jpg" }
],

Medicinal: [
{ id: 7, name: "Aloe Vera", price: 15, image: "img7.jpg" },
{ id: 8, name: "Tulsi", price: 10, image: "img8.jpg" },
{ id: 9, name: "Neem", price: 14, image: "img9.jpg" },
{ id: 10, name: "Chamomile", price: 13, image: "img10.jpg" },
{ id: 11, name: "Ginseng", price: 18, image: "img11.jpg" },
{ id: 12, name: "Echinacea", price: 16, image: "img12.jpg" }
],

Decorative: [
{ id: 13, name: "Monstera", price: 25, image: "img13.jpg" },
{ id: 14, name: "Snake Plant", price: 20, image: "img14.jpg" },
{ id: 15, name: "Pothos", price: 18, image: "img15.jpg" },
{ id: 16, name: "ZZ Plant", price: 24, image: "img16.jpg" },
{ id: 17, name: "Peace Lily", price: 22, image: "img17.jpg" },
{ id: 18, name: "Spider Plant", price: 17, image: "img18.jpg" }
]
};

Object.entries(plants).map(([category, items]) => (

  <div key={category}>
    <h2>{category}</h2>

```
{items.map((plant) => (
  <div key={plant.id}>
    <img src={plant.image} alt={plant.name} />
    <h3>{plant.name}</h3>
    <p>${plant.price}</p>

    <button
      disabled={addedItems.includes(plant.id)}
      onClick={() => dispatch(addItem(plant))}
    >
      Add To Cart
    </button>
  </div>
))}
```

  </div>
))
