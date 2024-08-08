"use server";

import { Movie } from "@/types/movie";

export async function fetchMovie(title: string): Promise<Movie | void> {
  const response = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=3c716292&t=${title}`
  );
  const data = await response.json();

  if (!data) {
    console.error("Movie not found:", data.Error);
    return;
  }

  return data;
}
