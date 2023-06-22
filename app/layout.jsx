"use client";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import { Provider as StoreProvider } from "jotai";
// export const metadata = {
//   title: "Review",
//   description: "Review movies",
// };

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="" />
          </div>
          <main className="app">
            <Nav />
            <StoreProvider>{children}</StoreProvider>
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
