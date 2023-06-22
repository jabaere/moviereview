"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { updateUi } from "@/storage/atom";
import { useAtom } from "jotai";
import Form from "@/components/Form";

const CreateReview = ({ movieId, movieName }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [update, setUpdate] = useAtom(updateUi);
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
        setSubmitting(false);
        setPost({ review: "", movie_name: "", key: "" });

        setUpdate(Math.floor(Math.random() * Date.now()));
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
