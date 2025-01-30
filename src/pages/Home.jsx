import React from "react";
import Navbar from "../components/Navbar";
import { UserList } from "../components/UserList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <hr className="text-white/30" />
      <br />
      <UserList />
      <hr className="text-white/30" />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
