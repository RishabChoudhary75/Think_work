import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function Bottom({ products, checked, searchQuery }) {
  let data = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(searchQuery.toLowerCase()) === -1) {
      return;
    }
    if (checked && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      data.push(
        <TableHead key={product.category} category={product.category} />
      );
    }
    data.push(<TableBody key={product.name} products={product} />);
    lastCategory = product.category;
  });
  return (
    <div className=" w-full flex justify-center ">
      <table className="table-auto border-collapse border border-slate-400 w-full" >
        <thead className="bg-slate-400">
          <tr>
            <th className="w-5">Name</th>
            <th >Price</th>
          </tr>
        </thead>
<tbody className="text-center">{data}</tbody>
      </table>
    </div>
  );
}

export default Bottom;
