"use client";
import Review from "./Review";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
const Reviews = ({ movie }) => {
  const response = [];
  const router = useRouter();
  const { data: session } = useSession();
  const [reviewData, setReviewData] = useState([]);
  const pathName = usePathname();
  const getData = async () => {
    const reviewResponse = await fetch("/api/review");
    const reviewdata = await reviewResponse.json();
    let filteredReviewDataByMovieId;
    //get review data by movie id

    if (movie) {
      filteredReviewDataByMovieId = reviewdata.filter(
        (review) => review.key === movie
      );
    }

    //get review data by user
    const filteredReviewDataByUser = reviewdata.filter(
      (review) => review.creator._id === session?.user.id
    );
    //set data depend condition
    pathName === "/profile"
      ? setReviewData(filteredReviewDataByUser)
      : setReviewData(filteredReviewDataByMovieId);
  };

  useEffect(() => {
    getData();
  }, []);
  const handleTagClick = () => router.push(`/${movie}`);

  return (
    <div className="review_container my-12 f-full">
      {reviewData.map((post, index) => (
        <Review comment={post} key={index} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

export default Reviews;
