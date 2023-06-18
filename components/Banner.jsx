import Image from "next/image";
import Link from "next/link";

const Banner = ({ data }) => {
  console.log(data);

  //split film title
  const splitter = (title) => {
    const maxLength = 15; // Maximum length for the shortened title

    if (title.length <= maxLength) {
      return [title, ""]; // Return the full title and an empty second part
    } else {
      const firstPart = title.slice(0, maxLength); // Get the first part of the title
      const remainingPart = title.slice(maxLength); // Get the remaining part of the title

      // Find the last space character in the first part to avoid cutting words in half
      const lastSpaceIndex = firstPart.lastIndexOf(" ");
      const truncatedFirstPart = firstPart.slice(0, lastSpaceIndex);
      const truncatedRemainingPart =
        firstPart.slice(lastSpaceIndex + 1) + remainingPart;

      return [truncatedFirstPart.trim(), truncatedRemainingPart.trim()]; // Trim any leading or trailing whitespace
    }
  };

  const [firstPart, secondPart] = splitter(data.results[0].title);

  const imagepath = "https://image.tmdb.org/t/p/original";
  return (
    <div className="w-full mt-16 flex relative gap-[4rem] flex-col lg:flex-row">
      <div className="left-banner flex">
        <div className="sm:flex bg-color-rose sm:w-[535px] lg:w-[735px] sm:h-[535px] lg:h-[735px] object-cover rounded-[50%] flex justify-center items-center">
          <Image
            src={
              data.results[0]?.poster_path
                ? imagepath + data.results[0]?.poster_path
                : "/images/mario.jpg"
            }
            width={600}
            height={600}
            className="bg-color-rose outline outline-[4rem] w-[400px] lg:w-[600px] lg:h-[600px] h-[400px] object-cover rounded-[50%]"
            alt="image"
          />
        </div>
        <div className="left-side-text absolute w-[180px] h-[18.84px] -rotate-90 left-[-80px] top-[350px] sm:top-[450px] lg:top-[600px]">
          <p className="font-archivo not-italic font-normal text-[1.5rem] md:text-[1.8rem] leading-[96%] text-[#562E08]">
            Powere by Jaba{" "}
          </p>
          <p className="font-archivo not-italic font-normal text-[1.5rem] md:text-[1.8rem] leading-[96%] text-[#562E08] pt-2">
            Georgia
          </p>
        </div>
      </div>
      <div className="right-banner pt-0 lg:pt-48">
        <div className="right_top">
          <div className="banner_text max-w-[41rem] mt-10 md:mt-0">
            <h1 className="not-italic font-black text-[7rem] md:text-[10rem] leading-[97.5%] tracking-[-0.005em] text-secondary-brown">
              {firstPart}{" "}
              <span className="text-btn-color opacity-100 blur-[1px]">
                {secondPart}
              </span>
            </h1>
            <p className="pt-[4rem] not-italic font-medium text-[1.5rem] md:text-[1.7rem] leading-[173%] tracking-[-0.01em] text-black font-archivo">
              {data.results[0]?.overview}
            </p>
          </div>
          <Link href="/popular" className="pt-[4rem] inline-block">
            <button type="button" className="btn w-[20.5rem] h-[6.4rem] ">
              See popular movies &#8250;
            </button>
          </Link>
        </div>
        <div className="right_follow-us"></div>
      </div>
    </div>
  );
};

export default Banner;
