"use client";
import Movie from "@/components/Movie";
import { getData } from "@/utils/getMovieData";
import { currentPageUpcomingAtom } from "@/storage/atom";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import Pagination from "@/components/Pagination";

export default function Home() {
  const [currentPage, setCurrentPage] = useAtom(currentPageUpcomingAtom);
  const [data, setData] = useState([]);

  const getMovieData = async () => {
    const data = await getData(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${currentPage}`
    );

    setData(data);
  };

  useEffect(() => {
    console.log(data);
    getMovieData();
  }, [currentPage]);

  return (
    <div className="grid gap-16 grid-cols-fluid w-full pt-14">
      {data?.results?.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
      {data?.results ? (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          data={data}
        />
      ) : null}
    </div>
  );
}
