"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";

const CreateReview = ({ movieId, movieName }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    review: "",
    movie_name: movieName,
    key: movieId,
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/review/new", {
        method: "POST",
        body: JSON.stringify({
          review: post.review,
          userId: session?.user.id,
          movie_name: post.movie_name,
          key: post.key,
        }),
      });
      if (response.ok) {
        router.push(`/${movieId}`);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreateReview;
