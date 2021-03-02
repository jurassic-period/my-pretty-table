import { useState } from "react";
import { TableBody } from "./TableBody";

export const Table = () => {
  const [isActive, setIsActive] = useState(false);
  console.log('table render')
  return (
    <>
      <h2>My pretty table</h2>
      <div className="filter-panel">
        <button
          className='btn'
          style={{color: `${isActive? '#1b5e20' : 'black'}`}}
          onClick={() =>
            setIsActive((s) => !s)
          }
        >
          isActive
        </button>
        <button className='btn'>Sort by default</button>
        
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Actions</th>
            <th>Name</th>
            <th>Active</th>
            <th><button className='btn'>Email</button></th>
            <th><button className='btn'>Balance</button></th>
          </tr>
        </thead>
        <TableBody isActive={isActive} />
      </table>
    </>
  );
};
