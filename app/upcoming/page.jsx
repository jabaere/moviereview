import Movie from "@/components/Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`
  );
  const response = await data.json();

  return (
    <div className="grid gap-16 grid-cols-fluid w-full pt-14">
      {response.results.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
    </div>
  );
}
