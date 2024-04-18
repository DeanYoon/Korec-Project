import Table from "./components/table";

import { useRouter } from "next/router";
import { useDBStore } from "./lib/store";
async function getData() {
  const res = await fetch(process.env.URL + "/api/inventory/get-data", {
    method: "GET",
  });
  const inventories = await res.json();

  return inventories.inventoryData.rows;
}

export default async function Home() {
  // const router = useRouter();
  const data = await getData();

  // router.push("/login");
  return (
    <main className="flex min-h-screen flex-col items-center justify-top bg-white  sm:w-1/2">
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
        <Table rows={data} />
      </div>
    </main>
  );
}
