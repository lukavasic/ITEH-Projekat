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
    isTheMostRecent: false,
    isTheMostCommented: false,
    isTheMostLiked: false,
  });

  let {
    isTheMostCommented,
    isTheOldest,
    isTheMostLiked,
    isTheMostRecent,
  } = topicsSortType;

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
        <br />
          <div class="flex-container">
            <div class="flex-child"
              className={
                isTheOldest
                  ? "header-checkbox app_color_font p__size font__p font__bold"
                  : "header-checkbox app_color_font p__size font__p"
              }
            >
              <input
                type="checkbox"
                value={isTheOldest}
                checked={isTheOldest}
                onChange={() => changeTopicsType("isTheOldest")}
              />
              <p onClick={() => changeTopicsType("isTheOldest")}>Najstariji</p>
            </div>

            <div class="flex-child"
              className={
                isTheMostRecent
                  ? "header-checkbox app_color_font p__size font__p font__bold"
                  : "header-checkbox app_color_font p__size font__p"
              }
            >
              <input
                onChange={() => changeTopicsType("isTheMostRecent")}
                value={isTheMostRecent}
                checked={isTheMostRecent}
                type="checkbox"
              />
              <p onClick={() => changeTopicsType("isTheMostRecent")}>
                Najnoviji
              </p>
            </div>

            <div class="flex-child"
              className={
                isTheMostLiked
                  ? "header-checkbox app_color_font p__size font__p font__bold"
                  : "header-checkbox app_color_font p__size font__p"
              }
            >
              <input
                type="checkbox"
                checked={isTheMostLiked}
                value={isTheMostLiked}
                onChange={() => changeTopicsType("isTheMostLiked")}
              />
              <p onClick={() => changeTopicsType("isTheMostLiked")}>
                Najlajkovaniji
              </p>
            </div>

            <div class="flex-child"
              className={
                isTheMostCommented
                  ? "header-checkbox app_color_font p__size font__p font__bold"
                  : "header-checkbox app_color_font p__size font__p"
              }
            >
              <input
                type="checkbox"
                checked={isTheMostCommented}
                value={isTheMostCommented}
                onChange={() => changeTopicsType("isTheMostCommented")}
              />
              <p onClick={() => changeTopicsType("isTheMostCommented")}>
                Najvise komentara
              </p>
            </div>
            </div>
        <form className="search-topic-wrapper">
          <textarea
            type="submit"
            value={dataFromSearch}
            onChange={(e) => onChange(e)}
          />

          <div
            className="topic-search-button app_color_background font__p font__bold"
            onClick={() => searchForTopic()}
          >
            Pretraži postove
          </div>
        </form>
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