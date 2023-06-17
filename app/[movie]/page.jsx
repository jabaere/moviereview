"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Reviews from "@components/Reviews";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import CreateReview from "@/components/CreateReview";
//save data

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 1000 } }
  );
  const response = await data.json();
  return response.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function movDetails({ params }) {
  const imagepath = "https://image.tmdb.org/t/p/original";
  const { movie } = params;
  const router = useRouter();
  const { data: session } = useSession();

  // start fetch movie data

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 1000 } }
  );
  const response = await data.json();

  return (
    <div>
      <div className="py-10">
        <h2 className="link_item">{response.title}</h2>
        <h3 className="text-lg">Release date: {response.release_date}</h3>
        <p>Runtime: {response.runtime} minutes</p>
        <p className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded text-white">
          {response.status}
        </p>
        <div className="flex gap-10 my-12 flex-col lg:flex-row">
          <Image
            className="rounded-2 shadow"
            src={imagepath + response.backdrop_path}
            alt=""
            width={600}
            height={600}
            priority
          />
          <p className="pt-[4rem] not-italic font-medium text-[1.7rem] leading-[173%] tracking-[-0.01em] text-black font-archivo">
            {response.overview}
          </p>
        </div>
      </div>
      <Reviews movie={movie} />
      {session?.user.id ? (
        <CreateReview movieId={movie} movieName={response.title} />
      ) : (
        <p className="text-primary-orange text-[1.7rem]">
          You must be logged in to write review
        </p>
      )}

      <button
        type="button"
        className="btn w-[15.5rem] h-[4.4rem] bg-[primary-brown] my-8 "
        onClick={() => router.back()}
      >
        Back
      </button>
    </div>
  );
}
