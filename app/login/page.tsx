export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="w-full ">
        <div className="w-full text-center  text-2xl">ログイン</div>
        <form className="mt-12">
          <div className="text-lg">ID</div>
          <input
            className="w-full p-4  my-2 h-8 rounded-sm  "
            type="text"
            required
          />
          <div className="text-lg">PASSWORD</div>
          <input
            className="w-full p-4  my-2 h-8 rounded-sm  "
            type="password"
            required
            maxLength={4}
            minLength={4}
          />
          <button className="w-full bg-black text-white h-8 my-4 rounded-sm text-sm">
            ログインする
          </button>
        </form>
      </div>
    </main>
  );
}
