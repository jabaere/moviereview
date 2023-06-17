import Review from "@/components/Review";

const Profile = ({ myReview, handleEdit, handleDelete, name }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>

      <div className="mt-10 prompt_layout">
        {myReview.map((review, index) => (
          <Review
            comment={review}
            handleEdit={() => handleEdit && handleEdit(review)}
            handleDelete={() => handleDelete && handleDelete(review)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
