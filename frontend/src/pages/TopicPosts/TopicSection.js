import React from "react";
import Moment from "react-moment";

const TopicSection = ({
  auth,
  post,
  addLikeToTopicPage,
  removeLikeFromPost,
}) => {
  return (
    <div className="topic-wrapper">
      <div className="topic-date font__p" style={{ paddingRight: 30 }}>
        <Moment format="HH:mm YYYY-MM-DD">{post.date}</Moment>
      </div>

      <div className="topic-user">
        <img src={post.avatar} className="topic-avatar" alt="" />
        <p className="font__p p__size">{post.name}</p>
      </div>

      <div className="topic-section font__p">
        <p>{post.textOfThePost}</p>
        <div className="topic-section-links font__p">
          <div className="like-item">
            <p
              className="font__p font__bold p__size hover"
              onClick={() => {
                if (post.likes.find((like) => like.user === auth.user._id)) {
                  post.likes.find((like) =>
                    removeLikeFromPost(post._id, like._id)
                  );
                } else {
                  addLikeToTopicPage(post._id);
                }
              }}
            >
              <i
                className={
                  post.likes.find((like) => like.user === auth.user._id)
                    ? "fas fa-thumbs-up"
                    : "far fa-thumbs-up"
                }
              ></i>
              {post.likes.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicSection;
