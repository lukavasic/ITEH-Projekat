import axios from "axios";
import { GET_USER_POSTS, USER_ERROR } from "../../constants/users.constants";

export const getUserPosts = (admin) => async (dispatch) => {
  try {

    if (admin){
      const res = await axios.get(`http://localhost:5000/api/posts/posts`);
      dispatch({ type: GET_USER_POSTS, payload: res.data });
    }
    else {
      const res = await axios.get(`http://localhost:5000/api/posts/user_posts`);
      dispatch({ type: GET_USER_POSTS, payload: res.data });
    }
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error,
    });
  }
};
