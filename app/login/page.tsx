"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      // Handle response data, such as redirecting on successful login
      if (responseData.status === 200) {
        const currentUsername = responseData.user;

        router.push("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="w-full ">
        <div className="w-full text-center  text-2xl">ログイン</div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
          <div className="text-lg">ID</div>
          <input
            className="w-full p-4  my-2 h-8 rounded-sm  "
            type="text"
            {...register("id", { required: true })}
          />
          <div className="text-lg">PASSWORD</div>
          <input
            className="w-full p-4  my-2 h-8 rounded-sm  "
            type="password"
            {...register("password", {
              required: true,
            })}
          />
          <button className="w-full bg-black text-white h-8 my-4 rounded-sm text-sm">
            ログインする
          </button>
        </form>
      </div>
    </main>
  );
}
