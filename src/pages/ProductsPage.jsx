import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { CoffeeContext } from "../context/coffee.context";
import { Link } from "react-router-dom";
import { API_URL } from "../services/API_URL";

/*"https://fake-coffee-api.vercel.app/api"*/

function ProductsPage() {

  const { coffees, fetchCoffees } = useContext(CoffeeContext)

  useEffect(() => {
    if (!coffees.length) {
      fetchCoffees();
    }
  }, []);

  return (
    coffees &&
    coffees.map((coffee) => (
      <Link key={coffee.id} to={`/product-details/${coffee.id}`}>
        <div class="ProductColumn">
          <h1>{coffee.name}</h1>
          <div>
            <img
              src={coffee.image_url}
              style={{ height: "6rem" }}
              alt={"image of" + coffee.name}
            />
            <p>{coffee.price}</p>
            <p>{coffee.region}</p>
          </div>
        </div>
      </Link>
    ))
  );
}

export default ProductsPage;
