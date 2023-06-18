"use client";
import { Suspense } from "react";
import Movie from "@/components/Movie";
import { getData } from "@/utils/getMovieData";
import { currentPagePopularAtom } from "@/storage/atom";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import Pagination from "@/components/Pagination";
export default function Popular() {
  const [currentPage, setCurrentPage] = useAtom(currentPagePopularAtom);
  const [data, setData] = useState([]);

  const getMovieData = async () => {
    const data = await getData(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${currentPage}`
    );

    setData(data);
  };

  useEffect(() => {
    getMovieData();
  }, [currentPage]);

  return (
    <div className="grid gap-16 grid-cols-fluid w-full pt-14 justify-items-center lg:justify-items-start">
      <Suspense fallback={<p>Loading feed...</p>}>
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
      </Suspense>
    </div>
  );
}
