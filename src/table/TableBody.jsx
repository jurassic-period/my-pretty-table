import React from "react";
import defaultData from "../default-data/default.json";
import { TableRow } from "./TableRow";

const Body = ({ isActive, sort, reversed }) => {
  // by state the data is either default or sorted
  const sortedData =
    sort === "default"
      ? defaultData
      : [...defaultData].sort(function (a, b) {
          if (a[sort] > b[sort]) {
            return 1;
          }
          if (a[sort] < b[sort]) {
            return -1;
          }
          return 0;
        });

  // if necessary, expand the sorting
  const preparedData = reversed ? sortedData.reverse() : sortedData;

  // split the data into all parents and all children
  const children = isActive ? [] : preparedData.filter((c) => c.parentId !== 0);

  const parents = isActive
    ? preparedData.filter((c) => c.isActive)
    : preparedData.filter((c) => c.parentId === 0);
  // TableRow will get own filtered children
  return (
    <tbody>
      {parents.map((p) => (
        <TableRow key={`t-body-${p.id}`} parent={p}>
          {children.filter((d) => d.parentId === p.id)}
        </TableRow>
      ))}
    </tbody>
  );
};

export const TableBody = React.memo(Body);
