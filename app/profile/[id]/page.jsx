"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userReview, setUserReview] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/reviews`);
      const data = await response.json();

      setUserReview(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return <Profile myReview={userReview} name={userName} />;
};

export default UserProfile;
