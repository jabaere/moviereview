import Link from "next/link";
import React from "react";
import Image from "next/image";

const Movie = ({ title, id, poster_path, release_date }) => {
  const imagepath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h2 className="font-archivo not-italic font-medium text-[1.5rem] leading-[173%] tracking-[-0.01em] text-secondary-brown">
        {title}
      </h2>
      <p className="font-archivo not-italic font-medium text-[1.4rem] leading-[173%] tracking-[-0.01em] text-black">
        Release date: {release_date}
      </p>
      <Link href={`/${id}`}>
        <Image
          src={imagepath + poster_path}
          alt="s"
          width={350}
          height={150}
          className="rounded py-2"
        />
      </Link>
    </div>
  );
};

export default Movie;
