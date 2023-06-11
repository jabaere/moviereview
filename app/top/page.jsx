"use client";
import Movie from "@/components/Movie";
import { currentPageAtom } from "@/storage/atom";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [data, setData] = useState([]);

  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${currentPage}`
    );
    const response = await data.json();
    console.log(response);
    setData(response);
  };

  useEffect(() => {
    console.log("da");
    getData();
  }, [currentPage]);
  //top_rated?language=en-US&page=1'
  return (
    <div className="grid gap-16 grid-cols-fluid w-full pt-14">
      {data.results?.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
      <div className="flex justify-center w-[80vw]">
        <div className="mx-auto my-0 flex items-baseline gap-10">
          <button
            type="button"
            className="btn w-[15.5rem] h-[4.4rem] mb-8"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next &#8250;
          </button>

          {data.page > 1 && (
            <>
              <p>{data.page + "/" + Math.round(data.total_pages / 20)}</p>
              <button
                type="button"
                className="btn w-[15.5rem] h-[4.4rem] bg-[primary-brown] mb-8"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                &#8249; Previous
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
