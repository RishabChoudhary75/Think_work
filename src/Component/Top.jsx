import React from "react";

function Top({ setChecked, setSearchQuery, checked,searchQuery }) {

  return (
    <div className="bg-slate-500 w-fit border-2  flex flex-col p-7 gap-2">
      <input type="text" placeholder="Search..." value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
      <div className="flex gap-2 items-baseline">
        <input
          type="checkbox"
          name="check"
          className="size-3"
         checked={checked}
         onChange={()=>{setChecked(!checked)}}
        />

        <label for="check" className="font-semibold">
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

export default Top;
