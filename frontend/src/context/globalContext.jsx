import React from "react";
import axios from "axios";
import { useState, useContext } from "react";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState([]);

  const addIncome = async (income) => {
    const response = await axios.post(`${BASE_URL}add-income`, income); //add-income is the end point where to add the income, income is the payload\
  };

  return (
    <GlobalContext.Provider value={"addIncome"}>
      {children}{" "}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
