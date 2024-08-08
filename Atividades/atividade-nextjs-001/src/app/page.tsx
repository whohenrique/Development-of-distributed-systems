"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      if (search !== "") {
        router.push(`/movie/${search}`);
      } else {
        router.push("/");
      }
    }
  }

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen p-24 gap-6">
      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className="text-7xl font-bold text-white">OMDB API</h1>
        <h3>Aqui você pode encontrar informações sobre filmes/séries</h3>
      </div>
      <input
        type="search"
        placeholder="Nome do filme"
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        className="w-[400px] h-14 p-4 mt-4 text-black rounded-lg "
      />
    </main>
  );
}
