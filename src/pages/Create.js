import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../components/redux/userAction";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });

  const { name, email, address, contact } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(state));
    navigate("/");
  };

  return (
    <Fragment>
      <div className="flex flex-col justify-center items-center postion:fixed top-0% left-0 w-[100vw] h-[100vh] bg-gray-200  max-w-full">
        <div className="w-[75vw] h-[60vh] lg:w-[40vw] lg:h-[65vh] bg-white overflow-hidden ">
          <h2 className="text-center font-bold text-2xl my-4">Create User</h2>
          <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={handleInputChange}
              required
              className="border-2 rounded-lg p-2 outline-none w-[60vw] lg:w-[35vw] mx-6"
            />
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              name="email"
              onChange={handleInputChange}
              required
              className="border-2 rounded-lg p-2 outline-none w-[60vw] lg:w-[35vw] mx-6"
            />
            <input
              type="text"
              placeholder="Enter address"
              value={address}
              name="address"
              onChange={handleInputChange}
              required
              className="border-2 rounded-lg p-2 outline-none w-[60vw] lg:w-[35vw] mx-6"
            />
            <input
              type="number"
              name="contact"
              placeholder="Enter contact"
              value={contact}
              onChange={handleInputChange}
              required
              className="border-2 rounded-lg p-2 outline-none w-[60vw] lg:w-[35vw] mx-6"
            />
            <button className="bg-blue-500  text-white font-bold px-3 py-1 rounded-lg w-[30vw] lg:w-[14vw] mx-6">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Create;
