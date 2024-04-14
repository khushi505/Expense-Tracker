import React from "react";
import axios from "axios";
import { useState, useContext } from "react";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    try {
      const response = await axios.post(`${BASE_URL}add-income`, income);
      //add-income is the end point where to add the income, income is the payload\
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <GlobalContext.Provider value={{ addIncome }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
