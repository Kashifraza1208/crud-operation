import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../components/redux/userReducer";

const Update = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   find the user whose id is matching with existing id
  const userToUpdate = users.filter((user) => user.id == id);

  const [name, setName] = useState(userToUpdate[0].name);
  const [email, setEmail] = useState(userToUpdate[0].email);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser({ id, name, email }));
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center positon-fixed top-0% left-0 w-[100vw] h-[100vh] bg-gray-200  max-w-full">
      <div className="w-[70vw] h-[60vh] lg:h-[45vh] lg:w-[40vw] bg-white overflow-hidden ">
        <h2 className="text-center font-bold text-2xl my-4">Update User</h2>
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
  );
};

export default Update;
