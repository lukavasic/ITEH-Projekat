import React, { useState, useEffect } from "react";
import { getPosts } from "../actions/posts.actions/posts.actions/getPosts";
import { getMostRecentPosts } from "../actions/posts.actions/posts.actions/getMostRecentPosts";
import { getMostCommentedPosts } from "../actions/posts.actions/posts.actions/getMostCommentedPosts";
import { getMostLikedPosts } from "../actions/posts.actions/posts.actions/getMostLikedPosts";
import { searchTopics } from "../actions/posts.actions/searchTopics";
import { connect } from "react-redux";
import TopicPostsWrapper from "./TopicPosts/TopicPostsWrapper";

const Topics = ({
  getPosts,
  getMostRecentPosts,
  getMostCommentedPosts,
  getMostLikedPosts,
  searchTopics,
  posts,
}) => {
  let [dataFromSearch, setDataFromSearch] = useState("");
  let [topicsSortType, setTopicsSortType] = useState({
    isTheOldest: false,
    isTheMostRecent: true,
    isTheMostCommented: false,
    isTheMostLiked: false,
  });

  let { isTheMostCommented, isTheOldest, isTheMostLiked, isTheMostRecent } =
    topicsSortType;

  useEffect(() => {
    if (isTheOldest) getPosts();
    else if (isTheMostCommented) getMostCommentedPosts();
    else if (isTheMostLiked) getMostLikedPosts();
    else getMostRecentPosts();
  }, []);

  const onChange = (e) => setDataFromSearch(e.target.value);

  const searchForTopic = () => {
    if (dataFromSearch !== "" || dataFromSearch !== null) {
      return searchTopics(dataFromSearch);
    } else {
      setTopicsSortType({
        isTheMostRecent: true,
        isTheMostCommented: false,
        isTheMostLiked: false,
        isTheOldest: false,
      });
      getMostRecentPosts();
    }
  };

  const changeTopicsType = (changedType) => {
    if (changedType === "isTheMostLiked") {
      setTopicsSortType({
        isTheMostLiked: true,
        isTheOldest: false,
        isTheMostCommented: false,
        isTheMostRecent: false,
      });
      getMostLikedPosts();
    } else if (changedType === "isTheOldest") {
      setTopicsSortType({
        isTheMostLiked: false,
        isTheOldest: true,
        isTheMostCommented: false,
        isTheMostRecent: false,
      });
      getPosts();
    } else if (changedType === "isTheMostCommented") {
      setTopicsSortType({
        isTheMostLiked: false,
        isTheOldest: false,
        isTheMostCommented: true,
        isTheMostRecent: false,
      });
      getMostCommentedPosts();
    } else {
      setTopicsSortType({
        isTheMostLiked: false,
        isTheOldest: false,
        isTheMostCommented: false,
        isTheMostRecent: true,
      });
      getMostRecentPosts();
    }
  };

  return (
    <div>
      <header className="topics-header">
        <p className="app_color_font font__bold font__p topics-headline">
          Postovi
        </p>
      </header>

      <div className="topics-wrapper">
        <TopicPostsWrapper
          isTheOldest={isTheOldest}
          isTheMostCommented={isTheMostCommented}
          isTheMostRecent={isTheMostRecent}
          isTheMostLiked={isTheMostLiked}
          posts={posts.posts}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = {
  getPosts,
  getMostRecentPosts,
  getMostCommentedPosts,
  getMostLikedPosts,
  searchTopics,
};

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
