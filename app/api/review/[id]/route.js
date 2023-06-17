import Review from "@models/review";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const review = await Review.findById(params.id).populate("creator");

    if (!review) return new Response("review not found", { status: 404 });

    return new Response(JSON.stringify(review), { status: 200 });
  } catch (error) {
    return new Response(`Failed to fetch review id ${params.id}`, {
      status: 500,
    });
  }
};

export const PATCH = async (request, { params }) => {
  const { review } = await request.json();

  try {
    await connectToDB();
    const existingReview = await Review.findById(params.id);
    if (!existingReview)
      return new Response("review not found", { status: 4040 });

    existingReview.review = review;

    await existingReview.save();
    return new Response(JSON.stringify(existingReview), { status: 200 });
  } catch (err) {
    return new Response("Failed to update review", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await Review.findByIdAndRemove(params.id);

    return new Response("review deleted successfully", { status: 200 });
  } catch (err) {
    return new Response("Failed to delete review", { status: 500 });
  }
};
