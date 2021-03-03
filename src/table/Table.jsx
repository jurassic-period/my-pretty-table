import { useState } from "react";
import { TableBody } from "./TableBody";

export const Table = () => {
  const [isActive, setIsActive] = useState(false);
  const [sort, setSort] = useState("default");
  return (
    <>
      <h2>My pretty table</h2>
      <div className="filter-panel">
        <button
          className="btn"
          style={{ color: `${isActive ? "#dd2c00" : "black"}` }}
          onClick={() => setIsActive((s) => !s)}
        >
          isActive
        </button>
        <button
          onClick={() => setSort("default")}
          className="btn"
          style={{ color: `${sort === "default" ? "#dd2c00" : "black"}` }}
        >
          Sort by default
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Actions</th>
            <th>Name</th>
            <th>Active</th>
            <th>
              <button
                onClick={() => setSort("email")}
                className="btn"
                style={{ color: `${sort === "email" ? "#dd2c00" : "black"}` }}
              >
                Email
              </button>
            </th>
            <th>
              <button
                onClick={() => setSort("balance")}
                className="btn"
                style={{ color: `${sort === "balance" ? "#dd2c00" : "black"}` }}
              >
                Balance
              </button>
            </th>
          </tr>
        </thead>
        <TableBody isActive={isActive} sort={sort} />
      </table>
    </>
  );
};
