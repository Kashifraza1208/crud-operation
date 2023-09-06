import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../components/redux/userReducer";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { users } = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));

    navigate("/");
  };

  return (
    <Fragment>
      <div className="flex flex-col justify-center items-center positon-fixed top-0% left-0 w-[100vw] h-[100vh] bg-gray-200  max-w-full">
        <div className="w-[70vw] h-[50vh]   lg:w-[40vw] lg:h-[45vh] bg-white overflow-hidden ">
          <h2 className="text-center font-bold text-2xl my-4">Create User</h2>
          <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-2 rounded-lg p-2 outline-none w-[60vw] lg:w-[35vw] mx-6"
            />
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
