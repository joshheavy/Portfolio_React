import React from "react";
import "./productlist.css";
import Product from "../product/Product";
import { Products } from "../../data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's ProjectJosh</h1>
        <p className="pl-desc">
          ProjectJosh is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {Products.map((product) => (
            <Product key={product.id} img={product.img} link={product.link}/>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
