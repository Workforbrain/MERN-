import data from "../data";
import Product from "./Product";

const Products = () => {
  return (
    // <h1>Product Details</h1>
    <div className="container">
     
     
             
      {data.map((product) => {
        return <Product product={product} key={product.id} />;
        })}
      
    </div>
  );
};

export default Products;
