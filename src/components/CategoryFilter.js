import React, { useState } from "react";

function CategoryFilter({categories,filter}) {
  const [selected,setSelected] = useState(0)
  function handleClick(key,n){
    setSelected(key)
    filter(n)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((name,i) => {
      return <button onClick={()=>handleClick(i,name)} key={i}
      className={i===selected? "selected":""}
      >{name}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
