import { useState } from "react";
import { TableBody } from "./TableBody";

export const Table = () => {
  const [shouldShowOnlyActive, setshouldShowOnlyActive] = useState(false);
  const [sortType, setsortType] = useState("default");
  const [isSortingReversed, setIsSortingReversed] = useState(false);

  const getArrow = () => (isSortingReversed === false ? "ˆ" : "ˇ");

  // changes 2 states, eliminates double clicks by default, but fixes for double mail and balance
  const changesortType = (key) => () => {
    if (sortType === key && sortType !== "default") {
      setIsSortingReversed((s) => !s);
    } else {
      setsortType(key);
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
          className="btn btn-reletive"
          onClick={() => setshouldShowOnlyActive((s) => !s)}
        >
          Show only active
          {shouldShowOnlyActive && (
            <div className="show-active-absolute">⚬</div>
          )}
        </button>
        <button
          onClick={changesortType("default")}
          className="btn"
          style={getButtonStyle(sortType, "default")}
        >
          sort by default(ID)
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
                onClick={changesortType("email")}
                className="btn btn-reletive"
                style={getButtonStyle(sortType, "email")}
              >
                Email
                <div className="btn-absolute">
                  {sortType === "email" && getArrow()}
                </div>
              </button>
            </th>
            <th>
              <button
                onClick={changesortType("balance")}
                className="btn btn-reletive"
                style={getButtonStyle(sortType, "balance")}
              >
                Balance
                <div className="btn-absolute">
                  {sortType === "balance" && getArrow()}
                </div>
              </button>
            </th>
          </tr>
        </thead>
        <TableBody
          shouldShowOnlyActive={shouldShowOnlyActive}
          sortType={sortType}
          isSortingReversed={isSortingReversed}
        />
      </table>
    </>
  );
};
