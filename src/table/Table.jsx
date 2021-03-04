import { useState } from "react";
import { TableBody } from "./TableBody";

export const Table = () => {
  const [isActive, setIsActive] = useState(false);
  const [sort, setSort] = useState("default");
  const [reversedSort, setRevSort] = useState(false);

  const getArrow = () => (reversedSort === false ? "ˆ" : "ˇ");

  // changes 2 states, eliminates double clicks by default, but fixes for double mail and balance
  const changeSort = (key) => () => {
    if (sort === key && sort !== "default") {
      setRevSort((s) => !s);
    } else {
      setSort(key);
    }
  };

  // optimization of reuse of very similar code
  const getButtonStyle = (state, label) => ({
    color: `${state === label ? "#dd2c00" : "black"}`,
  });
  return (
    <>
      <h2>My pretty table</h2>
      <div className="filter-panel">
        <button
          className="btn"
          style={getButtonStyle(isActive, true)}
          onClick={() => setIsActive((s) => !s)}
        >
          isActive
        </button>
        <button
          onClick={changeSort("default")}
          className="btn"
          style={getButtonStyle(sort, "default")}
        >
          Sort by default(ID)
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
                style={getButtonStyle(sort, "email")}
              >
                Email
                {sort === "email" && getArrow()}
              </button>
            </th>
            <th>
              <button
                onClick={changeSort("balance")}
                className="btn"
                style={getButtonStyle(sort, "balance")}
              >
                Balance
                {sort === "balance" && getArrow()}
              </button>
            </th>
          </tr>
        </thead>
        <TableBody isActive={isActive} sort={sort} reversed={reversedSort} />
      </table>
    </>
  );
};
