"use client";
import Review from "./Review";
import { useState, useEffect } from "react";
import { updateUi } from "@/storage/atom";
import { useAtom } from "jotai";

const Reviews = ({ movie }) => {
  const [reviewData, setReviewData] = useState([]);
  const [update, setUpdate] = useAtom(updateUi);

  useEffect(() => {
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

      setReviewData(filteredReviewDataByMovieId);
    };

    getData();
  }, [update]);

  return (
    <div className="review_container my-12 f-full">
      {reviewData.map((post, index) => (
        <Review comment={post} key={index} />
      ))}
    </div>
  );
};

export default Reviews;
