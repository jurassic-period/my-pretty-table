import { defaultData } from "../default-data";
import { TableRow } from "./TableRow";

const TableBody = ({ isActive }) => {

  const children = isActive ? [] : defaultData.filter((c) => c.parentId !== 0);
  const parents = isActive
    ? defaultData.filter((c) => c.isActive)
    : defaultData.filter((c) => c.parentId === 0);
    //фильтровать родителей
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

export { TableBody };
