"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const UserProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myReview, setMyreview] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/reviews`);
      const data = await response.json();

      setMyreview(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = (post) => {
    console.log(post);
    router.push(`/update-review?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this review?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/review/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myReview.filter((item) => item._id !== post._id);

        setMyreview(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      myReview={myReview}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default UserProfile;
