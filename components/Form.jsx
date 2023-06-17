import Link from "next/link";

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
  movie_name,
}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-[60rem] flex flex-col gap-7 glassmorphism"
      >
        <label htmlFor="">
          <span className="font-archivo font-semibold text-2xl text-gray-700">
            Your Review
          </span>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={post.review}
            onChange={(e) => setPost({ ...post, review: e.target.value })}
            placeholder="Write Review"
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Movie
          </span>
          <input
            name=""
            id=""
            value={post.movie_name}
            // onChange={(e) => setPost({ ...post, movie_name: e.target.value })}
            placeholder={`# ${post.movie_name}`}
            className="form_input"
            disabled
          />
        </label>

        <div className="flex items-baseline flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-xl">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-xl bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
