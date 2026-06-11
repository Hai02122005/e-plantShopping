import React, { useState } from "react";
import ProductList from "./ProductList";

function App() {
const [showProducts, setShowProducts] = useState(false);

if (showProducts) {
return <ProductList />;
}

return ( <div className="landing-page"> <h1>Welcome to Paradise Nursery</h1>

```
  <p>
    Discover beautiful indoor plants for your home.
  </p>

  <button
    onClick={() => setShowProducts(true)}
  >
    Get Started
  </button>
</div>
```

);
}

export default App;
