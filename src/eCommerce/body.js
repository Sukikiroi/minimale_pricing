import React from "react";
import Productcard from "./productcard";
const body = () => {
  let products = [
    { id: 1, name: "serwal", qty: 5, price: 12 },
    { id: 2, name: "sebat", qty: 2, price: 22 },
    { id: 3, name: "costume", qty: 3, price: 13 },
  ];
  return (
    <>
      {products.map((product) => (
        <div
          style={{
            width: "800px",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Productcard  product={product}/>
         
        </div>
      ))}
    </>
  );
};

export default body;
