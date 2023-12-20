import { createContext, useEffect, useState } from "react";
import { API_URL } from "../services/API_URL";
import axios from "axios";

const CoffeeContext = createContext();

const CoffeeProvider = ({ children }) => {
  const [coffees, setCoffees] = useState([]);

  const fetchCoffees = async () => {
    try {
      const response = await axios.get(API_URL + "/coffees");
      setCoffees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoffees();
  }, []);

  return (
    <CoffeeContext.Provider value={{ coffees, fetchCoffees }}>
      {children}
    </CoffeeContext.Provider>
  );
};

export { CoffeeContext, CoffeeProvider };
