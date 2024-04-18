"use client";

import { useEffect, useState } from "react";
import TableRow from "./table-row";
import { useDBStore } from "../lib/store";

const columns = [
  {
    key: "name",
    name: "品名",
  },
  {
    key: "max_num",
    name: "最大数量",
  },
  {
    key: "min_num",
    name: "最小数量",
  },
  {
    key: "curr_num",
    name: "現在数量",
  },
  {
    key: "change",
    name: "変更",
  },
];

export interface ITable {
  id: number;
  name: string;
  max_num: number;
  min_num: string;
  curr_num: number;
}

interface LoggedInUser {
  userId: string;
  username: string;
}
function Table(data: any) {
  const [rows, setRows] = useState(data.rows);
  const setUserId = useDBStore((state) => state.setUserId);
  const setUsername = useDBStore((state) => state.setUsername);

  const initialRow = {
    id: "xx",
    name: "",
    max_num: 0,
    min_num: "",
    curr_num: 0,
  };

  useEffect(() => {
    // Retrieve data from localStorage when the component mounts
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const loggedInUserData: LoggedInUser = JSON.parse(loggedInUser);
      const { userId, username } = loggedInUserData;
      setUserId(parseInt(userId));
      setUsername(username);
    }
  }, []);

  return (
    <div>
      <div className="flex">
        {columns.map((element: any) => (
          <div
            key={element.key}
            className="border h-8 w-20 items-center justify-center flex"
          >
            {element.name}
          </div>
        ))}
      </div>
      {rows.map((element: ITable) => (
        <TableRow element={element} />
      ))}

      <div className="flex bg-gray-300 w-full h-12 px-4 justify-between items-center">
        <div>製品追加</div>
        <div
          onClick={() => {
            setRows([...rows, initialRow]);
          }}
          className="border border-black rounded-full w-8 h-8 items-center  text-center bg-white text-xl "
        >
          +
        </div>
      </div>
    </div>
  );
}

export default Table;
