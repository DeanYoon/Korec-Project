"use client";

async function getData() {
  const res = await fetch(process.env.URL + "/api/inventory/get-data", {
    method: "GET",
  });
  const inventories = await res.json();
  console.log(inventories.inventoryData.fields);
  console.log(inventories.inventoryData.rows);
  return inventories;
}

export default async function Home() {
  const {
    inventoryData: { rows },
  } = await getData();

  const columns = [
    {
      name: "品名",
      selector: (row: any) => row.name,
    },
    {
      name: "最大数量",
      selector: (row: any) => row.max_num,
    },
    {
      name: "最小数量",
      selector: (row: any) => row.min_num,
    },
    {
      name: "現在数量",
      selector: (row: any) => row.curr_num,
    },
    {
      name: "変更",
      selector: (row: any) => row.button,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-top bg-white">
      <div className="w-full p-4 border-b-2">
        <div className="flex w-full justify-between  items-center">
          <input
            type="text"
            placeholder="search "
            className="p-2  w-10/12 border-black border"
          />
          <div className="flex border rounded-full w-8 h-8 justify-center items-center">
            <span>金</span>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="bg-gray-100 w-fit p-4 my-2">横浜２丁目店</div>
        <table className="w-full">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row: any, rowIndex: number) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>{column.selector(row)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
