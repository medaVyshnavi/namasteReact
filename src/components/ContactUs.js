import React from "react";

const ContactUs = () => {
  return (
    <div>
      <h1 className="text-xl font-bold m-4 p-4 text-center">Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="Enter Name"
          className="border border-black p-2"
        />
        <input
          type="text"
          placeholder="Enter Location"
          className="border border-black p-2"
        />
        <button type="submit" className="bg-green-200 rounded-md p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
