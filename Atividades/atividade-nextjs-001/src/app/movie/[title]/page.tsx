import { fetchMovie } from "@/action/fetch-movie";
import { MovieCard } from "@/components/MovieCard";

interface MoviePageProps {
  params: {
    title: string;
  };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movie = await fetchMovie(params.title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <main className="flex justify-center items-center w-full h-screen">
      <MovieCard movie={movie} />
    </main>
  );
}
