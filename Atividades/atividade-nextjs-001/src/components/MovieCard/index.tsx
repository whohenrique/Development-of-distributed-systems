"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Movie } from "@/types/movie";
import { ReactNode } from "react";
import { ArrowLeftIcon } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
}

export async function MovieCard({ movie }: MovieCardProps) {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center max-w-screen-lg h-fit bg-gray-800 text-white p-8 rounded-lg gap-6">
      <button
        className=" absolute top-12 left-25 flex items-center gap-1"
        onClick={() => router.replace("/")}
      >
        <ArrowLeftIcon size={32} />
        <h1 className="text-lg">Voltar</h1>
      </button>
      <div className="flex flex-col items-center w-full h-full gap-4 py-4">
        <h1 className="text-2xl font-bold">{movie.Title}</h1>
        {movie && (
          <Image
            src={movie.Poster}
            alt={movie.Title}
            width={350}
            height={350}
            className="rounded-lg"
          />
        )}
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <MovieCardInfo label="Year: " movie={movie.Year} />
        <MovieCardInfo label="Rated: " movie={movie.Rated} />
        <MovieCardInfo label="Released: " movie={movie.Released} />
        <MovieCardInfo label="Runtime: " movie={movie.Runtime} />
        <MovieCardInfo label="Genre: " movie={movie.Genre} />
        <MovieCardInfo label="Director: " movie={movie.Director} />
        <MovieCardInfo label="Writer: " movie={movie.Writer} />
        <MovieCardInfo label="Actors: " movie={movie.Actors} />
        <MovieCardInfo label="Plot: " movie={movie.Plot} />
        <MovieCardInfo label="Language: " movie={movie.Language} />
        <MovieCardInfo label="Country: " movie={movie.Country} />
        <MovieCardInfo label="Awards: " movie={movie.Awards} />
        <MovieCardInfo label="Metascore: " movie={movie.Metascore} />
        <MovieCardInfo label="IMDB Rating: " movie={movie.imdbRating} />
        <MovieCardInfo label="IMDB Votes: " movie={movie.imdbVotes} />
      </div>
    </div>
  );
}

function MovieCardInfo({ label, movie }: { label: string; movie: ReactNode }) {
  return (
    <p className="text-lg">
      <strong>{label}</strong>
      {movie}
    </p>
  );
}
