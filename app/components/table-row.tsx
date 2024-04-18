"use client";

import { useEffect, useState } from "react";
import { useDBStore } from "../lib/store";

interface IPropData {
  element: {
    id: number;
    name: string;
    max_num: number;
    min_num: string;
    curr_num: number;
  };
}

export default function TableRow(data: IPropData) {
  const [maxNum, setMaxNum] = useState(data.element.max_num);
  const [minNum, setMinNum] = useState(data.element.min_num);
  const [currNum, setCurrNum] = useState(data.element.curr_num);
  const [name, setName] = useState(data.element.name);
  const userId = useDBStore((state) => state.userId);

  const { id } = data.element;

  const saveTableData = async (column_id: string, data: any) => {
    try {
      const response = await fetch("/api/inventory/save-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, id, column_id, data }),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    saveTableData("curr_num", currNum);
  }, [currNum]);
  return (
    <div className="flex">
      <input
        id="name"
        value={name}
        className="  border h-10 w-20"
        onChange={(e) => {
          setName(e.target.value);
        }}
        onBlur={(e) => {
          //   console.log(e.target.id);
          saveTableData(e.target.id, e.target.value);
        }}
      />
      <input
        id="max_num"
        value={maxNum}
        className=" pl-2 border h-10 w-20"
        type="number"
        onChange={(e) => {
          setMaxNum(parseInt(e.target.value));
        }}
        onBlur={(e) => {
          //   console.log(e.target.id);
          saveTableData(e.target.id, e.target.value);
        }}
      />
      <input
        id="min_num"
        value={minNum}
        className=" pl-2 border h-10 w-20"
        onChange={(e) => {
          setMinNum(e.target.value);
        }}
        onBlur={(e) => {
          saveTableData(e.target.id, e.target.value);
        }}
      />
      <input
        value={currNum}
        className={` pl-2 border h-10 w-20 ${
          currNum < parseInt(minNum) && "bg-red-500"
        }`}
      />
      <div className="border w-20 h-10">
        <button
          className="w-1/2 border h-full text-2xl active:bg-red-500 bg-red-300"
          onClick={() => {
            setCurrNum((prev) => (prev > 0 ? prev - 1 : 0));
          }}
        >
          -
        </button>
        <button
          className="w-1/2 border h-full text-2xl active:bg-blue-500 bg-blue-300"
          onClick={() => {
            setCurrNum((prev) => (prev == maxNum ? maxNum : prev + 1));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
