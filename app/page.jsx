import Banner from "@components/Banner";

const Home = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`
  );
  const response = await data.json();
  return (
    <section className="w-full flex-center flex-col">
      <Banner data={response} />
    </section>
  );
};

export default Home;
