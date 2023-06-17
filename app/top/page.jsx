"use client";
import { Suspense } from "react";
import Movie from "@/components/Movie";
import { currentPageTopAtom } from "@/storage/atom";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import Pagination from "@/components/Pagination";
import { getData } from "@/utils/getMovieData";
export default function Top() {
  const [currentPage, setCurrentPage] = useAtom(currentPageTopAtom);
  const [data, setData] = useState([]);

  const getMovieData = async () => {
    const data = await getData(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${currentPage}`
    );

    setData(data);
  };

  useEffect(() => {
    console.log("da");
    getMovieData();
  }, [currentPage]);
  //top_rated?language=en-US&page=1'
  return (
    <div className="grid gap-16 grid-cols-fluid w-full pt-14">
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
