import React from "react";

const Todo = () => {
  return (
    <div>
      <div className="todo text-black bg_yellow  md:w-8/12 p-5 rounded-2xl ">
        <p className="text-xl font-bold mb-5">To-Do</p>
        <div className="form-control flex flex-col  gap-2">
          <label className=" flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox checkbox-sm"
            />
            <span className="   text-black text-lg">Call Rohan</span>
          </label>
          <label className=" flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox checkbox-sm"
            />
            <span className="   text-black text-lg">Meeting at 7pm </span>
          </label>
          <label className=" flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <span className="   text-black text-lg">Fix navbar bug issues</span>
          </label>
          <button className="btn btn-sm w-28 yellow rounded-full mt-5">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
