import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full mt-16 flex relative gap-[4rem]">
      <div className="left-banner flex">
        <div className="bg-color-rose w-[735px] h-[735px] object-cover rounded-[50%] flex justify-center items-center">
          <Image
            src={"/images/mario.jpg"}
            width={600}
            height={600}
            className="w-[600px] h-[600px] object-cover rounded-[50%]"
          />
        </div>
        <div className="left-side-text absolute w-[180px] h-[18.84px] -rotate-90 left-[-80px] top-[600px]">
          <p className="font-archivo not-italic font-normal text-[1.8rem] leading-[96%] text-[#562E08]">
            Powere by Jaba{" "}
          </p>
          <p className="font-archivo not-italic font-normal text-[1.8rem] leading-[96%] text-[#562E08] pt-2">
            Georgia
          </p>
        </div>
      </div>
      <div className="right-banner pt-48">
        <div className="right_top">
          <div className="banner_text w-[41rem]">
            <h1 className="not-italic font-black text-[10rem] leading-[97.5%] tracking-[-0.005em] text-secondary-brown">
              Super{" "}
              <span className="text-btn-color opacity-100 blur-[1px]">
                Mario
              </span>
            </h1>
            <p className="pt-[4rem] not-italic font-medium text-[1.7rem] leading-[173%] tracking-[-0.01em] text-black font-archivo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              sunt iste tenetur aliquid earum magnam rem ipsa deleniti alias
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
