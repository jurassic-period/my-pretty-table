import React, { useState } from "react";

const renderChildrenRows = (filteredChildren) =>
  filteredChildren.map((c) => {
    return (
      <tr key={`table-row-name-${c.name}`} className="tr">
        <td>☃</td>
        <td>{c.name}</td>
        <td>{c.isActive && "✔"}</td>
        <td>{c.email}</td>
        <td>{c.balance}</td>
      </tr>
    );
  });

const Row = ({ parent, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <tr className="tr">
        {children.length ? (
          <td className="children" onClick={() => setIsVisible((s) => !s)}>
            {isVisible ? "⌄" : "+"}
          </td>
        ) : (
          <td></td>
        )}
        <td>{parent.name}</td>
        <td>{parent.isActive && "✔"}</td>
        <td>{parent.email}</td>
        <td>{parent.balance}</td>
      </tr>
      {isVisible && renderChildrenRows(children)}
    </>
  );
};

export const TableRow = React.memo(Row);
