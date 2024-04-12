import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full p-4 border-b-2">
        <div className="flex w-full justify-between  items-center">
          <input type="text" placeholder="search " className="p-2  w-10/12" />
          <div className="flex border rounded-full w-8 h-8 justify-center items-center">
            <span>金</span>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </main>
  );
}
