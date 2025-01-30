import React from "react";
import Navbar from "../components/Navbar";
import UserForm from "../components/UserForm";
import Footer from "../components/Footer";

const Form = () => {
  return (
    <div>
      <Navbar disable={true} />
      <hr className="text-white/30" />
      <br />
      <UserForm />
      <hr className="text-white/30" />
      <br />
      <Footer />
    </div>
  );
};

export default Form;
