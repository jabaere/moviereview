import { connectToDB } from "@utils/database";
import Review from "@models/review";
import ResponseCache from "next/dist/server/response-cache";

export const POST = async (req, res) => {
  const { userId, review, movie_name, key } = await req.json();

  try {
    await connectToDB();
    const newReview = new Review({
      creator: userId,
      review,
      movie_name,
      key,
    });
    await newReview.save();
    return new Response(JSON.stringify(newReview), { status: 201 });
  } catch (err) {
    return new ResponseCache("Failed to create a new review", { status: 500 });
  }
};

//  prompt: post.prompt,
//           userId: session?.user.id,
//           movie_name: post.movie_name,
//           key:post.key || movie
