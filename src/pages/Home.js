import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
import { deleteUser, loadUser } from "../components/redux/userAction";

const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      dispatch(deleteUser(id));
    }
  };

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div>
      <div className="flex  flex-col justify-between mx-10 my-6">
        <h2 className="font-bold text-3xl text-center ">
          Crud operation on Reactjs
        </h2>
        <Link to="/create">
          <button className="bg-blue-500 mt-10 ml-2 lg:mt-24 lg:ml-24 flex justify-start text-white font-bold px-6 py-1 rounded-lg">
            Create +
          </button>
        </Link>
      </div>
      <table className="w-[90vw] lg:w-[80vw] h-[90vw] lg:h-[10vh] ml-8 lg:ml-36 overflew-x-scroll ">
        <thead className="border-b-2 ">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="border-b-2 ml-40 text-center">
          {users &&
            users.length > 0 &&
            users.map((user, index) => (
              <tr key={index} className="border-b-2">
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.contact}</td>

                <td>
                  <Link to={`/edit/${user.id}`}>
                    <button className="bg-blue-500 m-1 text-white font-bold px-3 py-1 rounded-lg">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white font-bold px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
