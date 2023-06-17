"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateReview = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reviewId = searchParams.get("id");
  console.log(reviewId);

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

// "use client";
// import { useState } from "react";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// import Form from "@/components/Form";

// const CreateReview = ({ movieId, movieName }) => {
//   const router = useRouter();
//   const { data: session } = useSession();
//   const [submitting, setSubmitting] = useState(false);
//   const [post, setPost] = useState({
//     review: "",
//     movie_name: movieName,
//     key: movieId,
//   });

//   const createPrompt = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     try {
//       const response = await fetch("/api/review/new", {
//         method: "POST",
//         body: JSON.stringify({
//           review: post.review,
//           userId: session?.user.id,
//           movie_name: post.movie_name,
//           key: post.key,
//         }),
//       });
//       if (response.ok) {
//         router.push(`/${movieId}`);
//       }
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setSubmitting(false);
//     }
//   };
//   return (
//     <Form
//       type="Create"
//       post={post}
//       setPost={setPost}
//       submitting={submitting}
//       handleSubmit={createPrompt}
//     />
//   );
// };

// export default CreateReview;
