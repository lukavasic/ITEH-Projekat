import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserById } from "../actions/users.actions/getUserById";
import { getUserPostsById } from "../actions/users.actions/getUserPostsById";
import Spinner from "../Spinner";
import UserPostsWrapper from "./UserPosts/UserPostsWrapper";
import UserProfileData from "../components/userProfile/UserProfileData";

const UserProfile = ({
  users,
  userProfile,
  posts: { post },
  match,
  getUserById,
  getUserPostsById,
}) => {
  useEffect(() => {
    getUserById(match.params.user_id);
    getUserPostsById(match.params.user_id);
  }, []);

  return users.profilePosts === [] ||
    userProfile === null ||
    post === users.profilePosts ? (
    <div className="all-page-wrapper flex__center">
      <Spinner />
    </div>
  ) : (
    <div className="account-page-wrapper">
      <div className="data">
        <img src={userProfile.avatar} alt="" />

        <UserProfileData userProfile={userProfile} />
        <div className="user-posts">
          <header className="user-posts-header-wrapper app_color_background">
            {post !== null || post !== [] ? (
              <p className="user-posts-header font__p font__bold">
                Njen/njegov post
              </p>
            ) : (
              <p className="user-posts-header font__p font__bold">
                Ona/on nije dodala/o još post
              </p>
            )}
          </header>
          <UserPostsWrapper posts={users.profilePosts} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  userProfile: state.users.userProfile,
  posts: state.posts,
});

export default connect(mapStateToProps, { getUserById, getUserPostsById })(
  UserProfile
);
