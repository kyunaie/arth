const link= 'https://source.unsplash.com/900x600/?coffee'; //Using this to generate random images for cards.

function ProductCard({ product }) {
    return (
        <div className="relative bg-yellow-400 shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h- h-80 object-cover object-center" src={product.image} alt={product.name} />
        <div className="absolute bg-gradient-to-t  from-slate-950  to-transparent bottom-0 left-0 right-0 p-4 bg-black bg-opacity-0 text-white">
          <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-slate-400">{product.description}</p>
                <p className="text-slate-300 font-semibold mt-2">${product.price}</p>
        </div>
      </div>
    );
  }
  
  export default ProductCard;