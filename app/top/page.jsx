"use client";
import Movie from "@/components/Movie";
import { currentPageAtom } from "@/storage/atom";
import { useAtom } from "jotai";

export default async function Home() {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${currentPage}`
  );
  const response = await data.json();
  //top_rated?language=en-US&page=1'
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
