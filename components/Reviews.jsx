'use client';
import Review from "./Review";
import {useState,useEffect} from 'react'
import { useRouter } from "next/navigation";
const Reviews = ({ movie }) => {
  const response = [];
  const router = useRouter();
  const [reviewData,setReviewData] = useState([])

  const getData = async () => {
      const reviewResponse = await fetch("/api/review");
      const reviewdata = await reviewResponse.json();

  const filteredReviewData = reviewdata.filter(
    (review) => review.key === movie
  );
  setReviewData(filteredReviewData)
  }

  useEffect(()=> {
    getData()
  },[])
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
