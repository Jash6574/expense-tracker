import React from "react";
import 'boxicons'

const obj = [
  {
    name: "Savings",
    color: "#f9c74f",
  },
  {
    name: "Investment",
    color: "#f9c74f",
  },
  {
    name: "Expense",
    color: "#f9c74f",
  },
];

function List() {
  return (
    <>
      <div className="flex flex-col py-6 gap-3">
        <h1 className="py-4 text-xl font-bold">History</h1>

        {obj.map((v, i) => (
          <Transaction key={i} category={v} />
        ))}
      </div>
    </>
  );
}

export default List;

function Transaction({ category }) {
  if (!category) return null;
  return (
    <>
      <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{borderRight:`8px solid ${category.color ?? "#e5e5e5"}`}}>
        <button className="px-1 mx-3"><box-icon name="trash" size={15} color={'#FF0000'}/></button>
        <span className="block w-full">{category.name??""}</span>
      </div>
    </>
  );
}
