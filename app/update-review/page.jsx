"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateReview = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reviewId = searchParams.get("id");

  const [post, setPost] = useState({
    review: "",
    key: "",
    movie_name: "",
  });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/review/${reviewId}`);
      const data = await response.json();

      setPost({
        review: data.review,
        key: data.key,
        movie_name: data.movie_name,
      });
    };

    if (reviewId) getPromptDetails();
  }, [reviewId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!reviewId) return alert("Missing review ID!");

    try {
      const response = await fetch(`/api/review/${reviewId}`, {
        method: "PATCH",
        body: JSON.stringify({
          review: post.review,
        }),
      });

      if (response.ok) {
        router.push(`/${post.key}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdateReview;
