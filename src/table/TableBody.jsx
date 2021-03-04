import React from "react";
import users from "../default-data/default.json";
import { TableRow } from "./TableRow";

const Body = ({ shouldShowOnlyActive, sortType, isSortingReversed }) => {
  // by state the data is either default or sorted
  const sortedUsers =
    sortType === "default"
      ? users
      : [...users].sort(function (a, b) {
          if (a[sortType] > b[sortType]) {
            return 1;
          }
          if (a[sortType] < b[sortType]) {
            return -1;
          }
          return 0;
        });

  // if necessary, expand the sorting
  const preparedUsers = isSortingReversed ? sortedUsers.reverse() : sortedUsers;

  // split the data into all parents and all children
  const children = shouldShowOnlyActive
    ? []
    : preparedUsers.filter((c) => c.parentId !== 0);

  const parents = shouldShowOnlyActive
    ? preparedUsers.filter((c) => c.isActive)
    : preparedUsers.filter((c) => c.parentId === 0);
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
