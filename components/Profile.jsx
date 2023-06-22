import Review from "@/components/Review";

const Profile = ({ myReview, handleEdit, handleDelete, name }) => {
  return (
    <section className="w-full ">
      <h1 className="head_text text-left py-8">
        <span className="text-primary-orange">{name} </span>
        <span className="text-primary-brown">Profile</span>
      </h1>

      <div className="mt-10 grid gap-16 grid-cols-min w-full pt-8 justify-items-center lg:justify-items-start">
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
