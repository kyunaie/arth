import ProductCard from "./shared/ProductCard";
const products = [
    {
      id: 1,
      name: "Single-Origin Ethiopian Yirgacheffe",
      description: "A fruity and floral coffee with notes of citrus and jasmine.",
      price: 12.99,
      image: "https://source.unsplash.com/900x600/?coffee",
    },
    {
      id: 2,
      name: "House Blend",
      description: "Our signature blend, featuring beans from Central and South America.",
      price: 9.99,
      image: "https://source.unsplash.com/900x600/?tea",
    },
    {
      id: 3,
      name: "Espresso Roast",
      description: "Dark and rich, perfect for espresso shots or bold coffee drinks.",
      price: 14.99,
      image: "https://source.unsplash.com/900x600/?espresso",
    },
    {
      id: 4,
      name: "Decaffeinated Blend",
      description: "Enjoy the taste of coffee without the caffeine.",
      price: 11.99,
      image: "https://source.unsplash.com/900x600/?latte",
    },
    {
      id: 5,
      name: "Organic Colombian",
      description: "Certified organic coffee beans from Colombia.",
      price: 13.49,
      image: "https://source.unsplash.com/900x600/?cappuccino",
    },
    {
      id: 6,
      name: "French Vanilla",
      description: "Smooth and creamy with a hint of vanilla flavor.",
      price: 10.99,
      image: "https://source.unsplash.com/900x600/?mocha",
    },
    {
      id: 7,
      name: "Dark Chocolate Mocha",
      description: "Indulgent coffee with rich dark chocolate notes.",
      price: 15.49,
      image: "https://source.unsplash.com/900x600/?americano",
    },
    {
      id: 8,
      name: "Hazelnut Delight",
      description: "Nutty and aromatic coffee with a hint of hazelnut.",
      price: 12.99,
      image: "https://source.unsplash.com/900x600/?macchiato",
    },
    {
      id: 9,
      name: "Pumpkin Spice",
      description: "Warm and comforting coffee with seasonal spices.",
      price: 11.99,
      image: "https://source.unsplash.com/900x600/?frappuccino",
    },
    {
      id: 10,
      name: "Caramel Macchiato",
      description: "Sweet and creamy coffee with caramel flavor.",
      price: 13.99,
      image: "https://source.unsplash.com/900x600/?chai",
    },
    {
      id: 11,
      name: "Iced Matcha Latte",
      description: "Refreshing and energizing green tea latte.",
      price: 14.49,
      image: "https://source.unsplash.com/900x600/?matcha",
    },
    {
      id: 12,
      name: "Black Tea",
      description: "A classic black tea with robust flavor.",
      price: 9.49,
      image: "https://source.unsplash.com/900x600/?blacktea",
    },
  ];
  
  
function ProductGrid() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-6">
      
        {products.map((product) => (
          <div key={product.id} className="flex">
            <ProductCard product={product}  />
          </div>
        ))}
      </div>
    );
  }

  export default ProductGrid;