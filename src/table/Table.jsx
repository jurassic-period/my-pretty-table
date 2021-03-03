import { useState } from "react";
import { TableBody } from "./TableBody";

export const Table = () => {
  const [isActive, setIsActive] = useState(false);
  const [sort, setSort] = useState("default");
  const [reversedSort, setRevSort] = useState(false);

  // changes 2 states, eliminates double clicks by default, but fixes for double mail and balance
  const changeSort = (key) => () => {
    if (sort === key && sort !== "default") {
      setRevSort((s) => !s);
    } else {
      setSort(key);
    }
  };

  // optimization of reuse of very similar code
  const btnColor = (state, label) => ({
    color: `${state === label ? "#dd2c00" : "black"}`,
  });
  return (
    <>
      <h2>My pretty table</h2>
      <div className="filter-panel">
        <button
          className="btn"
          style={btnColor(isActive, true)}
          onClick={() => setIsActive((s) => !s)}
        >
          isActive
        </button>
        <button
          onClick={changeSort("default")}
          className="btn"
          style={btnColor(sort, "default")}
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
                onClick={changeSort("email")}
                className="btn"
                style={btnColor(sort, "email")}
              >
                Email
              </button>
            </th>
            <th>
              <button
                onClick={changeSort("balance")}
                className="btn"
                style={btnColor(sort, "balance")}
              >
                Balance
              </button>
            </th>
          </tr>
        </thead>
        <TableBody isActive={isActive} sort={sort} reversed={reversedSort} />
      </table>
    </>
  );
};
