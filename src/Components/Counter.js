import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, Reset } from "../features/counterSlice";
import { counterStyle } from "../helper/styleChange";

const Counter = () => {
  const [amount, setAmount] = useState(1);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const addValue = Number(amount) || 0;

  const Reseter = () => {
    setAmount(1);
    dispatch(Reset());
  };

  const style = {
    color: counterStyle(count),
  };

  return (
    <section className=" bg-[#fedc7f] w-96 flex justify-center items-center flex-col p-4 border-4 border-black rounded-md shadow-xl  shadow-black">
      <h1 className="text-3xl font-bold mb-4">Counter</h1>
      <p className=" text-6xl font-semibold mb-6" style={style}>
        {count}
      </p>

      <label htmlFor="editValue">
        <input
          type="text"
          name="editValue"
          id="editValue"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          maxLength="3"
          className=" bg-inherit w-16 mb-4 text-xl text-center border-2 border-black rounded-md "
        />
      </label>
      <div className=" w-[100%] flex justify-evenly">
        <button
          className="text-3xl font-semibold w-14 border-2 border-black rounded-lg "
          onClick={() => dispatch(Increment(addValue))}
        >
          +
        </button>
        <button
          className=" text-2xl font-semibold w-24 border-2 border-black rounded-lg "
          onClick={Reseter}
        >
          Reset
        </button>
        <button
          className="text-3xl font-semibold w-14 border-2 border-black rounded-lg "
          onClick={() => dispatch(Decrement(addValue))}
        >
          -
        </button>
      </div>
    </section>
  );
};

export default Counter;
