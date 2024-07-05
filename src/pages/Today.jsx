import React from "react";

const Today = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Today</h1>
      <input
        type="text"
        placeholder="Add a task"
        className="w-full p-2 mb-4 border rounded"
      />
      <ul>
        <li className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Task 1</span>
          </div>
          <button className="text-red-500">Delete</button>
        </li>
        <li className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Task 2</span>
          </div>
          <button className="text-red-500">Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default Today;