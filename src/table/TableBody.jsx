import React from "react";
import defaultData from "../default-data/default.json";
import { TableRow } from "./TableRow";

const sorting = {
  email: function (a, b) {
    if (a.email > b.email) {
      return 1;
    }
    if (a.email < b.email) {
      return -1;
    }
    return 0;
  },
  balance: function (a, b) {
    if (a.balance > b.balance) {
      return 1;
    }
    if (a.balance < b.balance) {
      return -1;
    }
    return 0;
  },
};

const Body = ({ isActive, sort }) => {
  const sortedData =
    sort === "default" ? defaultData : [...defaultData].sort(sorting[sort]);

  const children = isActive ? [] : defaultData.filter((c) => c.parentId !== 0);
  const parents = isActive
    ? sortedData.filter((c) => c.isActive)
    : sortedData.filter((c) => c.parentId === 0);
  return (
    <tbody>
      {parents.map((p) => (
        <TableRow key={p.name} parent={p}>
          {children.filter((d) => d.parentId === p.id)}
        </TableRow>
      ))}
    </tbody>
  );
};

export const TableBody = React.memo(Body);
