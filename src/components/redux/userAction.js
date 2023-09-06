import {
  CREATE_USER,
  DELETE_USER,
  GET_SINGLE_USER,
  GET_USERS,
  UPDATE_USER,
} from "./actionType";
import axios from "axios";

export const loadUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:8000/user");
    dispatch({
      type: GET_USERS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createUser = (userData) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:8000/user", userData);
    dispatch({
      type: CREATE_USER,
      payload: data,
    });
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(` http://localhost:8000/user/${id}`);
    dispatch({
      type: DELETE_USER,
    });
    //after deletetion page will be reload
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (id, userData) => async (dispatch) => {
  try {
    await axios.put(` http://localhost:8000/user/${id}`, userData);
    dispatch({
      type: UPDATE_USER,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/user/${id}`);
    dispatch({
      type: GET_SINGLE_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
