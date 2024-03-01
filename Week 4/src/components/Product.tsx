const Product = (props: any) => {
     console.log(props.product);
    // function handleShowDetails(){
    //     console.log("Hello");
    //     setShow((current) => !current)
    // }

    <h3 className="">Product Components</h3>
    return (
        <div>
        <div className="product"> 
            <div>

                  <p>{props.product.title}</p>
                  <p><img src={props.product.image} alt={'image'} width={30}></img></p>
                
            </div> 
            <div className="pricing">           
                  <p>{props.product.category}</p>
                  <p>{props.product.price} </p> 
            </div>
            <div className="rating">
                  <p>{props.product.rating.rate}</p>
                  <p>{props.product.rating.count}</p>
        </div>
        </div>
        </div>
    );
};

export default Product;