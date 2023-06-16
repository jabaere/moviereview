"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const Review = ({ comment, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  //   const handleProfileClick = () => {
  //     // console.log(post);

  //     if (post.creator._id === session?.user.id) return router.push("/profile");

  //     router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  //   };
  return (
    <div className="review_card my-12">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          //   onClick={handleProfileClick}
        >
          <Image
            src={comment.creator.image}
            //src="/images/mario.jpg"
            alt="user image"
            width={40}
            height={40}
            className="rounded-full overflow-hidden w-[4rem] h-[4rem]"
          />
          <div className="flex flex-col">
            <h3 className=" font-semibold text-gray-900 link_item">
              {comment.creator.username}
            </h3>
            <p className="text-sm text-gray-500">{comment.creator.email}</p>
          </div>
        </div>
      </div>
      <p className="pt-[2rem] not-italic font-medium text-[1.7rem] leading-[173%] tracking-[-0.01em] text-black font-archivo">
        {comment.review}
      </p>
      <p
        className=" text-lg text-secondary-brown cursor-pointer"
        onClick={() => handleTagClick && handleTagClick()}
      >
        {`# ${comment.movie_name}`}
      </p>

      {session?.user.id === comment.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm edit cursor-pointer"
            // onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm delete cursor-pointer"
            // onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};
export default Review;
