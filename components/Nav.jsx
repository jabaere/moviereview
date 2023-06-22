"use client";
import Link from "next/link";
import Image from "next/image";
import { Rubik_Puddles } from "next/font/google";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { usePathname } from "next/navigation";
const rubik_Puddles = Rubik_Puddles({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-rubic",
});

const navbarItems = ["/", "/Popular", "/Upcoming", "/Top"];

const Nav = () => {
  const [providers, setProviders] = useState(null);
  const [togleDropDown, setTogleDropDown] = useState(false);
  const { data: session } = useSession();
  const [activeItem, setActiveItem] = useState("/");

  const pathname = usePathname();
  useEffect(() => {
    const newProvider = async () => {
      const res = await getProviders();
      setProviders(res);
      console.log(pathname);
    };

    newProvider();
  }, []);

  const handleNavClick = (item) => {
    localStorage.setItem("currentPage", 1);
    setActiveItem(item);
  };

  return (
    <div className="flex flex-col w-full mt-[1.5rem]">
      <nav
        className={`flex lg:flex-row flex-col justify-between items-center w-full pt-0 mb-[10rem] lg:mb-0 lg:py-[2.5rem] h-[6.7rem] ${rubik_Puddles.className}`}
      >
        <div className="flex justify-center w-[80vw] lg:w-auto">
          <Link href="/" className="flex gap-2 flex-center">
            <p className="text-primary-brown text-5xl flex flex-col items-center lg:flex-row lg:items-center">
              Movie<span className="text-primary-orange">Review</span>
            </p>
          </Link>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="flex flex-between gap-[2.4rem] md:gap-[3.4rem] w-[48.7rem] justify-center my-[2rem] lg:my-0">
            {navbarItems?.map((element, index) => (
              <Link
                className={`link_item ${
                  pathname === element.toLowerCase() ? "active" : ""
                }`}
                href={`${element.toLowerCase()}`}
                onClick={() => handleNavClick(element)}
                key={index}
              >
                {element === "/" ? "Home" : element.slice(1)}
                <hr
                  className={`h-[0.3rem] w-[1.8rem] text-left ${
                    pathname === element.toLowerCase()
                      ? "line_active"
                      : "line_hidden"
                  }`}
                />
              </Link>
            ))}
          </div>
          <div className="flex">
            {session?.user ? (
              <div className="flex gap-3 md:gap-5">
                <button
                  type="button"
                  className="text-gray-500 text-xl font-archivo"
                  onClick={signOut}
                >
                  Sign Out
                </button>
                <Link href="/profile" className="flex gap-2 flex-center">
                  <Image
                    src={session?.user.image}
                    width={37}
                    height={37}
                    alt="user image"
                    className="rounded-full"
                  />
                </Link>
              </div>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className="btn w-[10.8rem] h-[4.7rem]"
                    >
                      Sign In
                    </button>
                  ))}
              </>
            )}
          </div>
        </div>
      </nav>
      <div className="line hidden lg:display-block"></div>
    </div>
  );
};

export default Nav;
