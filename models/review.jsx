import mongoose, { Schema, model, models } from "mongoose";

const ReviewSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  review: {
    type: String,
    required: [true, "review is required"],
  },
  key: {
    type: String,
    required: [true, "key is required"],
  },
  movie_name: {
    type: String,
    required: [true, "name is required"],
  },
});

const Review = models.Review || model("Review", ReviewSchema);

export default Review;
