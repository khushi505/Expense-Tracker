import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import { useState } from "react";
import { plus } from "../../utils/icons";
import Button from "../Button/Button";

const Form = () => {
  const { addIncome } = useGlobalContext();
  const [inputState, SetInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    SetInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState); //sending the payload of input state on submitting the form
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Salary Title"
          onChange={handleInput("title")}
        />
      </div>

      <div className="input-control">
        <input
          value={amount}
          type="text"
          name={"amount"}
          placeholder={"Salary Amount"}
          onChange={handleInput("amount")} //name need to match the handleinput
        />
      </div>

      <div className="inputs">
        <div className="input-left">
          <div className="input-control">
            <DatePicker
              id="date"
              placeholderText="Enter A Date"
              selected={date}
              dateFormat="dd/MM/yyyy"
              onChange={(date) => {
                SetInputState({ ...inputState, date: date });
              }}
            />
          </div>

          <div className="selects input-control">
            <select
              required
              value={category}
              name="category"
              id="category"
              onChange={handleInput("category")}
            >
              <option value="" disabled>
                Select Option
              </option>
              <option value="salary">Salary</option>
              <option value="freelancing">Freelancing</option>
              <option value="investments">Investiments</option>
              <option value="stocks">Stocks</option>
              <option value="bitcoin">Bitcoin</option>
              <option value="bank">Bank Transfer</option>
              <option value="youtube">Youtube</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="input-right">
          <div className="text input-control">
            <textarea
              name="description"
              value={description}
              placeholder="Add A Reference"
              id="description"
              cols="30"
              rows="4"
              onChange={handleInput("description")}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="submit-btn">
        <Button
          name={"Add Income"}
          icon={plus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent"}
          color={"#fff"}
        />
      </div>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  margin-top: 30px;
  margin-right: 20px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    margin-top: 7px;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    input {
      width: 100%;
    }
  }
  .text {
    margin-top: 8px;
  }
  .selects {
    select {
      color: rgba(34, 34, 96, 0.4);
      margin-top: 30px;
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

  .inputs {
    display: flex;
    justify-content: space-between;
  }

  .submit-btn {
    display: flex;
    justify-content: center;
    height: 43px;

    button {
      border-radius: 5px;
      border: none;
      background-color: #00bfff;
      color: white;
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: #32cd32 !important;
        color: black;
      }
    }
  }
`;

export default Form;
